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
import { SalesCharge } from './SalesCharge';

/**
 * Request builder class for operations supported on the {@link SalesCharge} entity.
 */
export class SalesChargeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesCharge<T>, T> {
  /**
   * Returns a request builder for querying all `SalesCharge` entities.
   * @returns A request builder for creating requests to retrieve all `SalesCharge` entities.
   */
  getAll(): GetAllRequestBuilder<SalesCharge<T>, T> {
    return new GetAllRequestBuilder<SalesCharge<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesCharge` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesCharge`.
   */
  create(entity: SalesCharge<T>): CreateRequestBuilder<SalesCharge<T>, T> {
    return new CreateRequestBuilder<SalesCharge<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesCharge` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesCharge.dataAreaId}.
   * @param chargeCode Key property. See {@link SalesCharge.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `SalesCharge` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesCharge<T>, T> {
    return new GetByKeyRequestBuilder<SalesCharge<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargeCode: chargeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesCharge`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesCharge`.
   */
  update(entity: SalesCharge<T>): UpdateRequestBuilder<SalesCharge<T>, T> {
    return new UpdateRequestBuilder<SalesCharge<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesCharge`.
   * @param dataAreaId Key property. See {@link SalesCharge.dataAreaId}.
   * @param chargeCode Key property. See {@link SalesCharge.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `SalesCharge`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<SalesCharge<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesCharge`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesCharge` by taking the entity as a parameter.
   */
  delete(entity: SalesCharge<T>): DeleteRequestBuilder<SalesCharge<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<SalesCharge<T>, T> {
    return new DeleteRequestBuilder<SalesCharge<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesCharge
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
