/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { TradeAllowanceAgreementMerchandisingEvents } from './TradeAllowanceAgreementMerchandisingEvents';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEvents} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEvents` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEvents` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEvents<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEvents<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEvents<T>
  ): CreateRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T> {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEvents<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEvents` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.customerAccountNumber}.
   * @param eventId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.eventId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEvents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    eventId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T> {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEvents<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      EventId: eventId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEvents<T>
  ): UpdateRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T> {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEvents<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.customerAccountNumber}.
   * @param eventId Key property. See {@link TradeAllowanceAgreementMerchandisingEvents.eventId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    eventId: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEvents` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEvents<T>
  ): DeleteRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    eventId?: string
  ): DeleteRequestBuilder<TradeAllowanceAgreementMerchandisingEvents<T>, T> {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEvents<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAllowanceAgreementMerchandisingEvents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            EventId: eventId!
          }
    );
  }
}
