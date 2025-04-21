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
import { CdsDeliveryCharges } from './CdsDeliveryCharges';

/**
 * Request builder class for operations supported on the {@link CdsDeliveryCharges} entity.
 */
export class CdsDeliveryChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsDeliveryCharges<T>, T> {
  /**
   * Returns a request builder for querying all `CdsDeliveryCharges` entities.
   * @returns A request builder for creating requests to retrieve all `CdsDeliveryCharges` entities.
   */
  getAll(): GetAllRequestBuilder<CdsDeliveryCharges<T>, T> {
    return new GetAllRequestBuilder<CdsDeliveryCharges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsDeliveryCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsDeliveryCharges`.
   */
  create(
    entity: CdsDeliveryCharges<T>
  ): CreateRequestBuilder<CdsDeliveryCharges<T>, T> {
    return new CreateRequestBuilder<CdsDeliveryCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsDeliveryCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsDeliveryCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsDeliveryCharges.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `CdsDeliveryCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsDeliveryCharges<T>, T> {
    return new GetByKeyRequestBuilder<CdsDeliveryCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ChargeCode: chargeCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsDeliveryCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsDeliveryCharges`.
   */
  update(
    entity: CdsDeliveryCharges<T>
  ): UpdateRequestBuilder<CdsDeliveryCharges<T>, T> {
    return new UpdateRequestBuilder<CdsDeliveryCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsDeliveryCharges`.
   * @param dataAreaId Key property. See {@link CdsDeliveryCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsDeliveryCharges.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CdsDeliveryCharges`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<CdsDeliveryCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsDeliveryCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsDeliveryCharges` by taking the entity as a parameter.
   */
  delete(
    entity: CdsDeliveryCharges<T>
  ): DeleteRequestBuilder<CdsDeliveryCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<CdsDeliveryCharges<T>, T> {
    return new DeleteRequestBuilder<CdsDeliveryCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsDeliveryCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
