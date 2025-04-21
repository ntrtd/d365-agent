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
import { PaymentDayLinesCds } from './PaymentDayLinesCds';

/**
 * Request builder class for operations supported on the {@link PaymentDayLinesCds} entity.
 */
export class PaymentDayLinesCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentDayLinesCds<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentDayLinesCds` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentDayLinesCds` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentDayLinesCds<T>, T> {
    return new GetAllRequestBuilder<PaymentDayLinesCds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentDayLinesCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentDayLinesCds`.
   */
  create(
    entity: PaymentDayLinesCds<T>
  ): CreateRequestBuilder<PaymentDayLinesCds<T>, T> {
    return new CreateRequestBuilder<PaymentDayLinesCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentDayLinesCds` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentDayLinesCds.dataAreaId}.
   * @param cdsIntegrationKey Key property. See {@link PaymentDayLinesCds.cdsIntegrationKey}.
   * @returns A request builder for creating requests to retrieve one `PaymentDayLinesCds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    cdsIntegrationKey: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PaymentDayLinesCds<T>, T> {
    return new GetByKeyRequestBuilder<PaymentDayLinesCds<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CdsIntegrationKey: cdsIntegrationKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentDayLinesCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentDayLinesCds`.
   */
  update(
    entity: PaymentDayLinesCds<T>
  ): UpdateRequestBuilder<PaymentDayLinesCds<T>, T> {
    return new UpdateRequestBuilder<PaymentDayLinesCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentDayLinesCds`.
   * @param dataAreaId Key property. See {@link PaymentDayLinesCds.dataAreaId}.
   * @param cdsIntegrationKey Key property. See {@link PaymentDayLinesCds.cdsIntegrationKey}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDayLinesCds`.
   */
  delete(
    dataAreaId: string,
    cdsIntegrationKey: string
  ): DeleteRequestBuilder<PaymentDayLinesCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentDayLinesCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentDayLinesCds` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentDayLinesCds<T>
  ): DeleteRequestBuilder<PaymentDayLinesCds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    cdsIntegrationKey?: string
  ): DeleteRequestBuilder<PaymentDayLinesCds<T>, T> {
    return new DeleteRequestBuilder<PaymentDayLinesCds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentDayLinesCds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CdsIntegrationKey: cdsIntegrationKey!
          }
    );
  }
}
