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
import { RetailInternalOrganizationAttributeGroups } from './RetailInternalOrganizationAttributeGroups';

/**
 * Request builder class for operations supported on the {@link RetailInternalOrganizationAttributeGroups} entity.
 */
export class RetailInternalOrganizationAttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInternalOrganizationAttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInternalOrganizationAttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailInternalOrganizationAttributeGroups<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailInternalOrganizationAttributeGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailInternalOrganizationAttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInternalOrganizationAttributeGroups`.
   */
  create(
    entity: RetailInternalOrganizationAttributeGroups<T>
  ): CreateRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T> {
    return new CreateRequestBuilder<
      RetailInternalOrganizationAttributeGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailInternalOrganizationAttributeGroups` entity based on its keys.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationAttributeGroups.partyNumber}.
   * @param attributeGroupName Key property. See {@link RetailInternalOrganizationAttributeGroups.attributeGroupName}.
   * @returns A request builder for creating requests to retrieve one `RetailInternalOrganizationAttributeGroups` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailInternalOrganizationAttributeGroups<T>,
      T
    >(this.entityApi, {
      PartyNumber: partyNumber,
      AttributeGroupName: attributeGroupName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInternalOrganizationAttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInternalOrganizationAttributeGroups`.
   */
  update(
    entity: RetailInternalOrganizationAttributeGroups<T>
  ): UpdateRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T> {
    return new UpdateRequestBuilder<
      RetailInternalOrganizationAttributeGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationAttributeGroups`.
   * @param partyNumber Key property. See {@link RetailInternalOrganizationAttributeGroups.partyNumber}.
   * @param attributeGroupName Key property. See {@link RetailInternalOrganizationAttributeGroups.attributeGroupName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationAttributeGroups`.
   */
  delete(
    partyNumber: string,
    attributeGroupName: string
  ): DeleteRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInternalOrganizationAttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInternalOrganizationAttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInternalOrganizationAttributeGroups<T>
  ): DeleteRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T>;
  delete(
    partyNumberOrEntity: any,
    attributeGroupName?: string
  ): DeleteRequestBuilder<RetailInternalOrganizationAttributeGroups<T>, T> {
    return new DeleteRequestBuilder<
      RetailInternalOrganizationAttributeGroups<T>,
      T
    >(
      this.entityApi,
      partyNumberOrEntity instanceof RetailInternalOrganizationAttributeGroups
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            AttributeGroupName: attributeGroupName!
          }
    );
  }
}
