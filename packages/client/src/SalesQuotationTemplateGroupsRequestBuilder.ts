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
import { SalesQuotationTemplateGroups } from './SalesQuotationTemplateGroups';

/**
 * Request builder class for operations supported on the {@link SalesQuotationTemplateGroups} entity.
 */
export class SalesQuotationTemplateGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesQuotationTemplateGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SalesQuotationTemplateGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SalesQuotationTemplateGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SalesQuotationTemplateGroups<T>, T> {
    return new GetAllRequestBuilder<SalesQuotationTemplateGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesQuotationTemplateGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesQuotationTemplateGroups`.
   */
  create(
    entity: SalesQuotationTemplateGroups<T>
  ): CreateRequestBuilder<SalesQuotationTemplateGroups<T>, T> {
    return new CreateRequestBuilder<SalesQuotationTemplateGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesQuotationTemplateGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesQuotationTemplateGroups.dataAreaId}.
   * @param groupId Key property. See {@link SalesQuotationTemplateGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `SalesQuotationTemplateGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesQuotationTemplateGroups<T>, T> {
    return new GetByKeyRequestBuilder<SalesQuotationTemplateGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesQuotationTemplateGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesQuotationTemplateGroups`.
   */
  update(
    entity: SalesQuotationTemplateGroups<T>
  ): UpdateRequestBuilder<SalesQuotationTemplateGroups<T>, T> {
    return new UpdateRequestBuilder<SalesQuotationTemplateGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationTemplateGroups`.
   * @param dataAreaId Key property. See {@link SalesQuotationTemplateGroups.dataAreaId}.
   * @param groupId Key property. See {@link SalesQuotationTemplateGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationTemplateGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<SalesQuotationTemplateGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesQuotationTemplateGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesQuotationTemplateGroups` by taking the entity as a parameter.
   */
  delete(
    entity: SalesQuotationTemplateGroups<T>
  ): DeleteRequestBuilder<SalesQuotationTemplateGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<SalesQuotationTemplateGroups<T>, T> {
    return new DeleteRequestBuilder<SalesQuotationTemplateGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesQuotationTemplateGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
