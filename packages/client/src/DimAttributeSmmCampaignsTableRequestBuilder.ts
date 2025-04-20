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
import { DimAttributeSmmCampaignsTable } from './DimAttributeSmmCampaignsTable';

/**
 * Request builder class for operations supported on the {@link DimAttributeSmmCampaignsTable} entity.
 */
export class DimAttributeSmmCampaignsTableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeSmmCampaignsTable` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeSmmCampaignsTable` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
    return new GetAllRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeSmmCampaignsTable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeSmmCampaignsTable`.
   */
  create(
    entity: DimAttributeSmmCampaignsTable<T>
  ): CreateRequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
    return new CreateRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeSmmCampaignsTable` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeSmmCampaignsTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeSmmCampaignsTable.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeSmmCampaignsTable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeSmmCampaignsTable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeSmmCampaignsTable`.
   */
  update(
    entity: DimAttributeSmmCampaignsTable<T>
  ): UpdateRequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
    return new UpdateRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeSmmCampaignsTable`.
   * @param dataAreaId Key property. See {@link DimAttributeSmmCampaignsTable.dataAreaId}.
   * @param value Key property. See {@link DimAttributeSmmCampaignsTable.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeSmmCampaignsTable`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeSmmCampaignsTable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeSmmCampaignsTable` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeSmmCampaignsTable<T>
  ): DeleteRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeSmmCampaignsTable<T>, T> {
    return new DeleteRequestBuilder<DimAttributeSmmCampaignsTable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeSmmCampaignsTable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
