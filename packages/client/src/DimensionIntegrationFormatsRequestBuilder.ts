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
import { DimensionIntegrationFormats } from './DimensionIntegrationFormats';
import { DimensionHierarchyType } from './DimensionHierarchyType';

/**
 * Request builder class for operations supported on the {@link DimensionIntegrationFormats} entity.
 */
export class DimensionIntegrationFormatsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionIntegrationFormats<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionIntegrationFormats` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionIntegrationFormats` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionIntegrationFormats<T>, T> {
    return new GetAllRequestBuilder<DimensionIntegrationFormats<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionIntegrationFormats` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionIntegrationFormats`.
   */
  create(
    entity: DimensionIntegrationFormats<T>
  ): CreateRequestBuilder<DimensionIntegrationFormats<T>, T> {
    return new CreateRequestBuilder<DimensionIntegrationFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionIntegrationFormats` entity based on its keys.
   * @param dimensionFormatName Key property. See {@link DimensionIntegrationFormats.dimensionFormatName}.
   * @param dimensionFormatType Key property. See {@link DimensionIntegrationFormats.dimensionFormatType}.
   * @returns A request builder for creating requests to retrieve one `DimensionIntegrationFormats` entity based on its keys.
   */
  getByKey(
    dimensionFormatName: DeserializedType<T, 'Edm.String'>,
    dimensionFormatType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.DimensionHierarchyType'
    >
  ): GetByKeyRequestBuilder<DimensionIntegrationFormats<T>, T> {
    return new GetByKeyRequestBuilder<DimensionIntegrationFormats<T>, T>(
      this.entityApi,
      {
        DimensionFormatName: dimensionFormatName,
        DimensionFormatType: dimensionFormatType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionIntegrationFormats`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionIntegrationFormats`.
   */
  update(
    entity: DimensionIntegrationFormats<T>
  ): UpdateRequestBuilder<DimensionIntegrationFormats<T>, T> {
    return new UpdateRequestBuilder<DimensionIntegrationFormats<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionIntegrationFormats`.
   * @param dimensionFormatName Key property. See {@link DimensionIntegrationFormats.dimensionFormatName}.
   * @param dimensionFormatType Key property. See {@link DimensionIntegrationFormats.dimensionFormatType}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionIntegrationFormats`.
   */
  delete(
    dimensionFormatName: string,
    dimensionFormatType: DimensionHierarchyType
  ): DeleteRequestBuilder<DimensionIntegrationFormats<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionIntegrationFormats`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionIntegrationFormats` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionIntegrationFormats<T>
  ): DeleteRequestBuilder<DimensionIntegrationFormats<T>, T>;
  delete(
    dimensionFormatNameOrEntity: any,
    dimensionFormatType?: DimensionHierarchyType
  ): DeleteRequestBuilder<DimensionIntegrationFormats<T>, T> {
    return new DeleteRequestBuilder<DimensionIntegrationFormats<T>, T>(
      this.entityApi,
      dimensionFormatNameOrEntity instanceof DimensionIntegrationFormats
        ? dimensionFormatNameOrEntity
        : {
            DimensionFormatName: dimensionFormatNameOrEntity!,
            DimensionFormatType: dimensionFormatType!
          }
    );
  }
}
