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
import { TaxServiceCodeEntities } from './TaxServiceCodeEntities';

/**
 * Request builder class for operations supported on the {@link TaxServiceCodeEntities} entity.
 */
export class TaxServiceCodeEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxServiceCodeEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TaxServiceCodeEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TaxServiceCodeEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TaxServiceCodeEntities<T>, T> {
    return new GetAllRequestBuilder<TaxServiceCodeEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxServiceCodeEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxServiceCodeEntities`.
   */
  create(
    entity: TaxServiceCodeEntities<T>
  ): CreateRequestBuilder<TaxServiceCodeEntities<T>, T> {
    return new CreateRequestBuilder<TaxServiceCodeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxServiceCodeEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxServiceCodeEntities.dataAreaId}.
   * @param serviceCode Key property. See {@link TaxServiceCodeEntities.serviceCode}.
   * @returns A request builder for creating requests to retrieve one `TaxServiceCodeEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    serviceCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxServiceCodeEntities<T>, T> {
    return new GetByKeyRequestBuilder<TaxServiceCodeEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ServiceCode: serviceCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxServiceCodeEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxServiceCodeEntities`.
   */
  update(
    entity: TaxServiceCodeEntities<T>
  ): UpdateRequestBuilder<TaxServiceCodeEntities<T>, T> {
    return new UpdateRequestBuilder<TaxServiceCodeEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxServiceCodeEntities`.
   * @param dataAreaId Key property. See {@link TaxServiceCodeEntities.dataAreaId}.
   * @param serviceCode Key property. See {@link TaxServiceCodeEntities.serviceCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceCodeEntities`.
   */
  delete(
    dataAreaId: string,
    serviceCode: string
  ): DeleteRequestBuilder<TaxServiceCodeEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxServiceCodeEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceCodeEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TaxServiceCodeEntities<T>
  ): DeleteRequestBuilder<TaxServiceCodeEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    serviceCode?: string
  ): DeleteRequestBuilder<TaxServiceCodeEntities<T>, T> {
    return new DeleteRequestBuilder<TaxServiceCodeEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxServiceCodeEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ServiceCode: serviceCode!
          }
    );
  }
}
