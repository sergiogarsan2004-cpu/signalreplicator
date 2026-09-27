# SignalReplicator

**Your Telegram group, your broker, automatic.**

SignalReplicator reads the signals posted in the Telegram channels you choose and
places them in your own broker account, without you doing anything.

👉 **[signalreplicator.com](https://signalreplicator.com)** · [English](https://signalreplicator.com/en.html) · [Español](https://signalreplicator.com/)

---

## What it does

It reads the text of the signal — symbol, direction, entry, stop loss and several
take profits — however each channel happens to write it, in five languages
(ES / EN / FR / DE / PT). Then it manages the trade: break-even, trailing stop,
partial closes, and the close orders the channel sends afterwards. Every channel
can have its own risk settings.

Every signal is logged with the time it arrived and the time your broker executed
it, so you can check it yourself in your panel.

## The two ways to run it

| | Cloud | Desktop |
|---|---|---|
| Runs on | our servers, 24/7 | your own Windows PC |
| Platforms | **MetaTrader 4 and 5** | MetaTrader 5 only |
| Computer switched on? | not needed | yes, with MT5 open |
| Price | €35/month | €23/month, or €299 once |

Both come with **7 days free**. You enter your card when you subscribe, nothing is
charged during those 7 days, and you can cancel from your account at any time.

If your account is MT4, the Cloud plan is the one you need — the desktop expert
advisor is written in MQL5.

## About your credentials

**Your broker password never passes through our servers.** You type it straight
into MetaApi, the service that connects to your broker. MetaApi does store it,
because that is the only way anything can trade on your behalf — but we never see
it and we never hold it. The MetaApi account is ours and we pay for it, so you do
not sign up anywhere else and you do not give a card to anyone but us.

Your Telegram connects the same way as signing in on a new phone: your number and
the code you receive. The session is **read-only by design** — we never send,
reply or post anything from your account, and we never enter chats you have not
chosen. It shows up in your own Telegram under Settings › Devices, and you can
close it yourself whenever you like.

## What we do not do

- **We are not a signal provider.** You choose the channels. We copy what they
  post, exactly as they post it.
- **We never touch your money.** It stays in your broker account, under your
  control.
- **We do not guarantee results.** The outcome depends on the channel you pick,
  on your broker and on the market. Nobody can promise you a profit.
- **We do not read signals inside images.** The parser reads text. If a channel
  posts a screenshot or a sticker, we tell you so you can act on it yourself.

## Support

[@SignalReplicatorSupport_bot](https://t.me/SignalReplicatorSupport_bot) ·
signalreplicatorsupport@gmail.com — you write, and the person who built the tool
answers.

## About this repository

This repository holds the **public website** at signalreplicator.com, published
with GitHub Pages. The trading engine, the cloud backend and the MQL5 expert
advisor are not here.

---

CFD trading carries a risk of loss. Signals are informational and do not
constitute financial advice.

© 2026 SignalReplicator · Sergio García Santos · León, Spain ·
[Terms](https://signalreplicator.com/terms.html) ·
[Privacy](https://signalreplicator.com/privacy.html) ·
[Refunds](https://signalreplicator.com/refunds.html)
