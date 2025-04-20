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
import { CdsInventoryCharges } from './CdsInventoryCharges';

/**
 * Request builder class for operations supported on the {@link CdsInventoryCharges} entity.
 */
export class CdsInventoryChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsInventoryCharges<T>, T> {
  /**
   * Returns a request builder for querying all `CdsInventoryCharges` entities.
   * @returns A request builder for creating requests to retrieve all `CdsInventoryCharges` entities.
   */
  getAll(): GetAllRequestBuilder<CdsInventoryCharges<T>, T> {
    return new GetAllRequestBuilder<CdsInventoryCharges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsInventoryCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsInventoryCharges`.
   */
  create(
    entity: CdsInventoryCharges<T>
  ): CreateRequestBuilder<CdsInventoryCharges<T>, T> {
    return new CreateRequestBuilder<CdsInventoryCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsInventoryCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsInventoryCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsInventoryCharges.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `CdsInventoryCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsInventoryCharges<T>, T> {
    return new GetByKeyRequestBuilder<CdsInventoryCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ChargeCode: chargeCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsInventoryCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsInventoryCharges`.
   */
  update(
    entity: CdsInventoryCharges<T>
  ): UpdateRequestBuilder<CdsInventoryCharges<T>, T> {
    return new UpdateRequestBuilder<CdsInventoryCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryCharges`.
   * @param dataAreaId Key property. See {@link CdsInventoryCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsInventoryCharges.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryCharges`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<CdsInventoryCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsInventoryCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsInventoryCharges` by taking the entity as a parameter.
   */
  delete(
    entity: CdsInventoryCharges<T>
  ): DeleteRequestBuilder<CdsInventoryCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<CdsInventoryCharges<T>, T> {
    return new DeleteRequestBuilder<CdsInventoryCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsInventoryCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
