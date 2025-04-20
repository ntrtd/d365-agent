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
import { TradeAllowanceAgreementMerchandisingEventBillBacks } from './TradeAllowanceAgreementMerchandisingEventBillBacks';

/**
 * Request builder class for operations supported on the {@link TradeAllowanceAgreementMerchandisingEventBillBacks} entity.
 */
export class TradeAllowanceAgreementMerchandisingEventBillBacksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
  T
> {
  /**
   * Returns a request builder for querying all `TradeAllowanceAgreementMerchandisingEventBillBacks` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAllowanceAgreementMerchandisingEventBillBacks` entities.
   */
  getAll(): GetAllRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradeAllowanceAgreementMerchandisingEventBillBacks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   */
  create(
    entity: TradeAllowanceAgreementMerchandisingEventBillBacks<T>
  ): CreateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  > {
    return new CreateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TradeAllowanceAgreementMerchandisingEventBillBacks` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.tradeAllowanceAgreementMerchandisingEventId}.
   * @param billBackId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.billBackId}.
   * @returns A request builder for creating requests to retrieve one `TradeAllowanceAgreementMerchandisingEventBillBacks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    tradeAllowanceAgreementMerchandisingEventId: DeserializedType<
      T,
      'Edm.String'
    >,
    billBackId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TradeAllowanceAgreementId: tradeAllowanceAgreementId,
      CustomerAccountNumber: customerAccountNumber,
      TradeAllowanceAgreementMerchandisingEventId:
        tradeAllowanceAgreementMerchandisingEventId,
      BillBackId: billBackId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   */
  update(
    entity: TradeAllowanceAgreementMerchandisingEventBillBacks<T>
  ): UpdateRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  > {
    return new UpdateRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   * @param dataAreaId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.dataAreaId}.
   * @param tradeAllowanceAgreementId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.tradeAllowanceAgreementId}.
   * @param customerAccountNumber Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.customerAccountNumber}.
   * @param tradeAllowanceAgreementMerchandisingEventId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.tradeAllowanceAgreementMerchandisingEventId}.
   * @param billBackId Key property. See {@link TradeAllowanceAgreementMerchandisingEventBillBacks.billBackId}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   */
  delete(
    dataAreaId: string,
    tradeAllowanceAgreementId: string,
    customerAccountNumber: string,
    tradeAllowanceAgreementMerchandisingEventId: string,
    billBackId: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAllowanceAgreementMerchandisingEventBillBacks` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAllowanceAgreementMerchandisingEventBillBacks<T>
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    tradeAllowanceAgreementId?: string,
    customerAccountNumber?: string,
    tradeAllowanceAgreementMerchandisingEventId?: string,
    billBackId?: string
  ): DeleteRequestBuilder<
    TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
    T
  > {
    return new DeleteRequestBuilder<
      TradeAllowanceAgreementMerchandisingEventBillBacks<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      TradeAllowanceAgreementMerchandisingEventBillBacks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TradeAllowanceAgreementId: tradeAllowanceAgreementId!,
            CustomerAccountNumber: customerAccountNumber!,
            TradeAllowanceAgreementMerchandisingEventId:
              tradeAllowanceAgreementMerchandisingEventId!,
            BillBackId: billBackId!
          }
    );
  }
}
