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
import { BarcodeSetupBiEntities } from './BarcodeSetupBiEntities';

/**
 * Request builder class for operations supported on the {@link BarcodeSetupBiEntities} entity.
 */
export class BarcodeSetupBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BarcodeSetupBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BarcodeSetupBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BarcodeSetupBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BarcodeSetupBiEntities<T>, T> {
    return new GetAllRequestBuilder<BarcodeSetupBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BarcodeSetupBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BarcodeSetupBiEntities`.
   */
  create(
    entity: BarcodeSetupBiEntities<T>
  ): CreateRequestBuilder<BarcodeSetupBiEntities<T>, T> {
    return new CreateRequestBuilder<BarcodeSetupBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BarcodeSetupBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BarcodeSetupBiEntities.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link BarcodeSetupBiEntities.barcodeSetupId}.
   * @returns A request builder for creating requests to retrieve one `BarcodeSetupBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    barcodeSetupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BarcodeSetupBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BarcodeSetupBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        barcodeSetupId: barcodeSetupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BarcodeSetupBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BarcodeSetupBiEntities`.
   */
  update(
    entity: BarcodeSetupBiEntities<T>
  ): UpdateRequestBuilder<BarcodeSetupBiEntities<T>, T> {
    return new UpdateRequestBuilder<BarcodeSetupBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BarcodeSetupBiEntities`.
   * @param dataAreaId Key property. See {@link BarcodeSetupBiEntities.dataAreaId}.
   * @param barcodeSetupId Key property. See {@link BarcodeSetupBiEntities.barcodeSetupId}.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeSetupBiEntities`.
   */
  delete(
    dataAreaId: string,
    barcodeSetupId: string
  ): DeleteRequestBuilder<BarcodeSetupBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BarcodeSetupBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BarcodeSetupBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BarcodeSetupBiEntities<T>
  ): DeleteRequestBuilder<BarcodeSetupBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    barcodeSetupId?: string
  ): DeleteRequestBuilder<BarcodeSetupBiEntities<T>, T> {
    return new DeleteRequestBuilder<BarcodeSetupBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BarcodeSetupBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            barcodeSetupId: barcodeSetupId!
          }
    );
  }
}
