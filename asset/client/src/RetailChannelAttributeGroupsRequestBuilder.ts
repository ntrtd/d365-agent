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
import { RetailChannelAttributeGroups } from './RetailChannelAttributeGroups';
import { RetailChannelAttributeModifier } from './RetailChannelAttributeModifier';

/**
 * Request builder class for operations supported on the {@link RetailChannelAttributeGroups} entity.
 */
export class RetailChannelAttributeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelAttributeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelAttributeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelAttributeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelAttributeGroups<T>, T> {
    return new GetAllRequestBuilder<RetailChannelAttributeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelAttributeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelAttributeGroups`.
   */
  create(
    entity: RetailChannelAttributeGroups<T>
  ): CreateRequestBuilder<RetailChannelAttributeGroups<T>, T> {
    return new CreateRequestBuilder<RetailChannelAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelAttributeGroups` entity based on its keys.
   * @param omOperatingUnitNumber Key property. See {@link RetailChannelAttributeGroups.omOperatingUnitNumber}.
   * @param attributeGroupName Key property. See {@link RetailChannelAttributeGroups.attributeGroupName}.
   * @param attributeModifier Key property. See {@link RetailChannelAttributeGroups.attributeModifier}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelAttributeGroups` entity based on its keys.
   */
  getByKey(
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    attributeGroupName: DeserializedType<T, 'Edm.String'>,
    attributeModifier: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailChannelAttributeModifier'
    >
  ): GetByKeyRequestBuilder<RetailChannelAttributeGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelAttributeGroups<T>, T>(
      this.entityApi,
      {
        OMOperatingUnitNumber: omOperatingUnitNumber,
        AttributeGroupName: attributeGroupName,
        AttributeModifier: attributeModifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelAttributeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelAttributeGroups`.
   */
  update(
    entity: RetailChannelAttributeGroups<T>
  ): UpdateRequestBuilder<RetailChannelAttributeGroups<T>, T> {
    return new UpdateRequestBuilder<RetailChannelAttributeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelAttributeGroups`.
   * @param omOperatingUnitNumber Key property. See {@link RetailChannelAttributeGroups.omOperatingUnitNumber}.
   * @param attributeGroupName Key property. See {@link RetailChannelAttributeGroups.attributeGroupName}.
   * @param attributeModifier Key property. See {@link RetailChannelAttributeGroups.attributeModifier}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelAttributeGroups`.
   */
  delete(
    omOperatingUnitNumber: string,
    attributeGroupName: string,
    attributeModifier: RetailChannelAttributeModifier
  ): DeleteRequestBuilder<RetailChannelAttributeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelAttributeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelAttributeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelAttributeGroups<T>
  ): DeleteRequestBuilder<RetailChannelAttributeGroups<T>, T>;
  delete(
    omOperatingUnitNumberOrEntity: any,
    attributeGroupName?: string,
    attributeModifier?: RetailChannelAttributeModifier
  ): DeleteRequestBuilder<RetailChannelAttributeGroups<T>, T> {
    return new DeleteRequestBuilder<RetailChannelAttributeGroups<T>, T>(
      this.entityApi,
      omOperatingUnitNumberOrEntity instanceof RetailChannelAttributeGroups
        ? omOperatingUnitNumberOrEntity
        : {
            OMOperatingUnitNumber: omOperatingUnitNumberOrEntity!,
            AttributeGroupName: attributeGroupName!,
            AttributeModifier: attributeModifier!
          }
    );
  }
}
