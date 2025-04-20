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
import { InventInventoryDataServiceNumberSequenceEntities } from './InventInventoryDataServiceNumberSequenceEntities';

/**
 * Request builder class for operations supported on the {@link InventInventoryDataServiceNumberSequenceEntities} entity.
 */
export class InventInventoryDataServiceNumberSequenceEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  InventInventoryDataServiceNumberSequenceEntities<T>,
  T
> {
  /**
   * Returns a request builder for querying all `InventInventoryDataServiceNumberSequenceEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventInventoryDataServiceNumberSequenceEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventInventoryDataServiceNumberSequenceEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventInventoryDataServiceNumberSequenceEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   */
  create(
    entity: InventInventoryDataServiceNumberSequenceEntities<T>
  ): CreateRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  > {
    return new CreateRequestBuilder<
      InventInventoryDataServiceNumberSequenceEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventInventoryDataServiceNumberSequenceEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.dataAreaId}.
   * @param ivDataAreaId Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.ivDataAreaId}.
   * @param numberSequence Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.numberSequence}.
   * @returns A request builder for creating requests to retrieve one `InventInventoryDataServiceNumberSequenceEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ivDataAreaId: DeserializedType<T, 'Edm.String'>,
    numberSequence: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      InventInventoryDataServiceNumberSequenceEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      IVDataAreaId: ivDataAreaId,
      NumberSequence: numberSequence
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   */
  update(
    entity: InventInventoryDataServiceNumberSequenceEntities<T>
  ): UpdateRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  > {
    return new UpdateRequestBuilder<
      InventInventoryDataServiceNumberSequenceEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   * @param dataAreaId Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.dataAreaId}.
   * @param ivDataAreaId Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.ivDataAreaId}.
   * @param numberSequence Key property. See {@link InventInventoryDataServiceNumberSequenceEntities.numberSequence}.
   * @returns A request builder for creating requests that delete an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   */
  delete(
    dataAreaId: string,
    ivDataAreaId: string,
    numberSequence: string
  ): DeleteRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `InventInventoryDataServiceNumberSequenceEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventInventoryDataServiceNumberSequenceEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventInventoryDataServiceNumberSequenceEntities<T>
  ): DeleteRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    ivDataAreaId?: string,
    numberSequence?: string
  ): DeleteRequestBuilder<
    InventInventoryDataServiceNumberSequenceEntities<T>,
    T
  > {
    return new DeleteRequestBuilder<
      InventInventoryDataServiceNumberSequenceEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      InventInventoryDataServiceNumberSequenceEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IVDataAreaId: ivDataAreaId!,
            NumberSequence: numberSequence!
          }
    );
  }
}
