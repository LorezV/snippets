import jwt
from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from datetime import datetime
from datetime import timedelta
# Create your models here.


class User(AbstractUser, PermissionsMixin):
    birth_day = models.DateField(
        null=True, blank=True, help_text="Дата рождения пользователя", verbose_name="Дата рождения")
    profession = models.CharField(
        max_length=32, null=True, blank=True, verbose_name="Профессия")
    city = models.CharField(max_length=128, blank=True)
    status = models.CharField(max_length=128, blank=True)
    avatar_url = models.URLField(max_length=128, blank=True)
    friends = models.ManyToManyField(
        to='self',
        related_name='friendship',
        symmetrical=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    @property
    def token(self):
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=14)
        token = jwt.encode({
            'id': self.pk,
            'exp': dt.utcfromtimestamp(dt.timestamp())
        }, settings.SECRET_KEY, algorithm='HS256')
        token = token.encode()
        return token.decode('utf-8')


class AbstractPost(models.Model):
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    publish_date = models.DateField()
    publish_time = models.TimeField()
    text = models.TextField(max_length=15985, blank=True)

    class Meta:
        abstract = True


class Post(AbstractPost):
    likes = models.ManyToManyField(User, related_name='post_likes', blank=True)

    class Meta():
        verbose_name = 'Пост'
        verbose_name_plural = 'Посты'


class Chat(models.Model):
    DIALOG = 'D'
    CHAT = 'C'
    CHAT_TYPE_CHOICES = (
        (DIALOG, _('Dialog')),
        (CHAT, _('Chat'))
    )
    type = models.CharField(
        _('Тип'),
        max_length=1,
        choices=CHAT_TYPE_CHOICES,
        default=DIALOG
    )
    members = models.ManyToManyField(User, verbose_name=_("Участник"))


class Message(models.Model):
    chat = models.ForeignKey(
        Chat,
        verbose_name=_("Чат"),
        on_delete=models.CASCADE)
    author = models.ForeignKey(
        User,
        verbose_name=_("Пользователь"),
        on_delete=models.CASCADE)
    message = models.TextField(_("Сообщение"))
    pub_date = models.DateTimeField(_('Дата сообщения'), default=timezone.now)
    is_readed = models.BooleanField(_('Прочитано'), default=False)

    class Meta:
        ordering = ['pub_date']

    def __str__(self):
        return self.message
