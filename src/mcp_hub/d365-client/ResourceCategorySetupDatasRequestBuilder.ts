/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ResourceCategorySetupDatas } from './ResourceCategorySetupDatas';

/**
 * Request builder class for operations supported on the {@link ResourceCategorySetupDatas} entity.
 */
export class ResourceCategorySetupDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceCategorySetupDatas<T>, T> {
  /**
   * Returns a request builder for querying all `ResourceCategorySetupDatas` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceCategorySetupDatas` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceCategorySetupDatas<T>, T> {
    return new GetAllRequestBuilder<ResourceCategorySetupDatas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ResourceCategorySetupDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceCategorySetupDatas`.
   */
  create(
    entity: ResourceCategorySetupDatas<T>
  ): CreateRequestBuilder<ResourceCategorySetupDatas<T>, T> {
    return new CreateRequestBuilder<ResourceCategorySetupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ResourceCategorySetupDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link ResourceCategorySetupDatas.dataAreaId}.
   * @param validFrom Key property. See {@link ResourceCategorySetupDatas.validFrom}.
   * @param validTo Key property. See {@link ResourceCategorySetupDatas.validTo}.
   * @param resourceId Key property. See {@link ResourceCategorySetupDatas.resourceId}.
   * @param roleId Key property. See {@link ResourceCategorySetupDatas.roleId}.
   * @param resourceCompanyId Key property. See {@link ResourceCategorySetupDatas.resourceCompanyId}.
   * @returns A request builder for creating requests to retrieve one `ResourceCategorySetupDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    roleId: DeserializedType<T, 'Edm.String'>,
    resourceCompanyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ResourceCategorySetupDatas<T>, T> {
    return new GetByKeyRequestBuilder<ResourceCategorySetupDatas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ValidFrom: validFrom,
        ValidTo: validTo,
        ResourceId: resourceId,
        RoleId: roleId,
        ResourceCompanyId: resourceCompanyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceCategorySetupDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceCategorySetupDatas`.
   */
  update(
    entity: ResourceCategorySetupDatas<T>
  ): UpdateRequestBuilder<ResourceCategorySetupDatas<T>, T> {
    return new UpdateRequestBuilder<ResourceCategorySetupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceCategorySetupDatas`.
   * @param dataAreaId Key property. See {@link ResourceCategorySetupDatas.dataAreaId}.
   * @param validFrom Key property. See {@link ResourceCategorySetupDatas.validFrom}.
   * @param validTo Key property. See {@link ResourceCategorySetupDatas.validTo}.
   * @param resourceId Key property. See {@link ResourceCategorySetupDatas.resourceId}.
   * @param roleId Key property. See {@link ResourceCategorySetupDatas.roleId}.
   * @param resourceCompanyId Key property. See {@link ResourceCategorySetupDatas.resourceCompanyId}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategorySetupDatas`.
   */
  delete(
    dataAreaId: string,
    validFrom: Moment,
    validTo: Moment,
    resourceId: string,
    roleId: string,
    resourceCompanyId: string
  ): DeleteRequestBuilder<ResourceCategorySetupDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceCategorySetupDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategorySetupDatas` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceCategorySetupDatas<T>
  ): DeleteRequestBuilder<ResourceCategorySetupDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment,
    resourceId?: string,
    roleId?: string,
    resourceCompanyId?: string
  ): DeleteRequestBuilder<ResourceCategorySetupDatas<T>, T> {
    return new DeleteRequestBuilder<ResourceCategorySetupDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ResourceCategorySetupDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            ResourceId: resourceId!,
            RoleId: roleId!,
            ResourceCompanyId: resourceCompanyId!
          }
    );
  }
}
