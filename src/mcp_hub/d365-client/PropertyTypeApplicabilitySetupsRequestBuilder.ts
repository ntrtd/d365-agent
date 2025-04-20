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
import { PropertyTypeApplicabilitySetups } from './PropertyTypeApplicabilitySetups';

/**
 * Request builder class for operations supported on the {@link PropertyTypeApplicabilitySetups} entity.
 */
export class PropertyTypeApplicabilitySetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
  /**
   * Returns a request builder for querying all `PropertyTypeApplicabilitySetups` entities.
   * @returns A request builder for creating requests to retrieve all `PropertyTypeApplicabilitySetups` entities.
   */
  getAll(): GetAllRequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
    return new GetAllRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PropertyTypeApplicabilitySetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PropertyTypeApplicabilitySetups`.
   */
  create(
    entity: PropertyTypeApplicabilitySetups<T>
  ): CreateRequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
    return new CreateRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PropertyTypeApplicabilitySetups` entity based on its keys.
   * @param propertyType Key property. See {@link PropertyTypeApplicabilitySetups.propertyType}.
   * @param tableName Key property. See {@link PropertyTypeApplicabilitySetups.tableName}.
   * @returns A request builder for creating requests to retrieve one `PropertyTypeApplicabilitySetups` entity based on its keys.
   */
  getByKey(
    propertyType: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
    return new GetByKeyRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>(
      this.entityApi,
      {
        PropertyType: propertyType,
        TableName: tableName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PropertyTypeApplicabilitySetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PropertyTypeApplicabilitySetups`.
   */
  update(
    entity: PropertyTypeApplicabilitySetups<T>
  ): UpdateRequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
    return new UpdateRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PropertyTypeApplicabilitySetups`.
   * @param propertyType Key property. See {@link PropertyTypeApplicabilitySetups.propertyType}.
   * @param tableName Key property. See {@link PropertyTypeApplicabilitySetups.tableName}.
   * @returns A request builder for creating requests that delete an entity of type `PropertyTypeApplicabilitySetups`.
   */
  delete(
    propertyType: string,
    tableName: string
  ): DeleteRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PropertyTypeApplicabilitySetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PropertyTypeApplicabilitySetups` by taking the entity as a parameter.
   */
  delete(
    entity: PropertyTypeApplicabilitySetups<T>
  ): DeleteRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>;
  delete(
    propertyTypeOrEntity: any,
    tableName?: string
  ): DeleteRequestBuilder<PropertyTypeApplicabilitySetups<T>, T> {
    return new DeleteRequestBuilder<PropertyTypeApplicabilitySetups<T>, T>(
      this.entityApi,
      propertyTypeOrEntity instanceof PropertyTypeApplicabilitySetups
        ? propertyTypeOrEntity
        : {
            PropertyType: propertyTypeOrEntity!,
            TableName: tableName!
          }
    );
  }
}
