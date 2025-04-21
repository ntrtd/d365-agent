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
import { PayRateConversions } from './PayRateConversions';

/**
 * Request builder class for operations supported on the {@link PayRateConversions} entity.
 */
export class PayRateConversionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayRateConversions<T>, T> {
  /**
   * Returns a request builder for querying all `PayRateConversions` entities.
   * @returns A request builder for creating requests to retrieve all `PayRateConversions` entities.
   */
  getAll(): GetAllRequestBuilder<PayRateConversions<T>, T> {
    return new GetAllRequestBuilder<PayRateConversions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayRateConversions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayRateConversions`.
   */
  create(
    entity: PayRateConversions<T>
  ): CreateRequestBuilder<PayRateConversions<T>, T> {
    return new CreateRequestBuilder<PayRateConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayRateConversions` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayRateConversions.dataAreaId}.
   * @param payRateConversion Key property. See {@link PayRateConversions.payRateConversion}.
   * @returns A request builder for creating requests to retrieve one `PayRateConversions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payRateConversion: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayRateConversions<T>, T> {
    return new GetByKeyRequestBuilder<PayRateConversions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PayRateConversion: payRateConversion
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayRateConversions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayRateConversions`.
   */
  update(
    entity: PayRateConversions<T>
  ): UpdateRequestBuilder<PayRateConversions<T>, T> {
    return new UpdateRequestBuilder<PayRateConversions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayRateConversions`.
   * @param dataAreaId Key property. See {@link PayRateConversions.dataAreaId}.
   * @param payRateConversion Key property. See {@link PayRateConversions.payRateConversion}.
   * @returns A request builder for creating requests that delete an entity of type `PayRateConversions`.
   */
  delete(
    dataAreaId: string,
    payRateConversion: string
  ): DeleteRequestBuilder<PayRateConversions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayRateConversions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayRateConversions` by taking the entity as a parameter.
   */
  delete(
    entity: PayRateConversions<T>
  ): DeleteRequestBuilder<PayRateConversions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payRateConversion?: string
  ): DeleteRequestBuilder<PayRateConversions<T>, T> {
    return new DeleteRequestBuilder<PayRateConversions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayRateConversions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayRateConversion: payRateConversion!
          }
    );
  }
}
