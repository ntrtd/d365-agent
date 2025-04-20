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
import { RetailAssortmentChannelLines } from './RetailAssortmentChannelLines';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';

/**
 * Request builder class for operations supported on the {@link RetailAssortmentChannelLines} entity.
 */
export class RetailAssortmentChannelLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailAssortmentChannelLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailAssortmentChannelLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailAssortmentChannelLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailAssortmentChannelLines<T>, T> {
    return new GetAllRequestBuilder<RetailAssortmentChannelLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailAssortmentChannelLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailAssortmentChannelLines`.
   */
  create(
    entity: RetailAssortmentChannelLines<T>
  ): CreateRequestBuilder<RetailAssortmentChannelLines<T>, T> {
    return new CreateRequestBuilder<RetailAssortmentChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailAssortmentChannelLines` entity based on its keys.
   * @param assortmentId Key property. See {@link RetailAssortmentChannelLines.assortmentId}.
   * @param partyNumber Key property. See {@link RetailAssortmentChannelLines.partyNumber}.
   * @param organizationHierarchyType Key property. See {@link RetailAssortmentChannelLines.organizationHierarchyType}.
   * @param status Key property. See {@link RetailAssortmentChannelLines.status}.
   * @returns A request builder for creating requests to retrieve one `RetailAssortmentChannelLines` entity based on its keys.
   */
  getByKey(
    assortmentId: DeserializedType<T, 'Edm.String'>,
    partyNumber: DeserializedType<T, 'Edm.String'>,
    organizationHierarchyType: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailAssortmentStatusType'
    >
  ): GetByKeyRequestBuilder<RetailAssortmentChannelLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailAssortmentChannelLines<T>, T>(
      this.entityApi,
      {
        AssortmentId: assortmentId,
        PartyNumber: partyNumber,
        OrganizationHierarchyType: organizationHierarchyType,
        Status: status
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailAssortmentChannelLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailAssortmentChannelLines`.
   */
  update(
    entity: RetailAssortmentChannelLines<T>
  ): UpdateRequestBuilder<RetailAssortmentChannelLines<T>, T> {
    return new UpdateRequestBuilder<RetailAssortmentChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailAssortmentChannelLines`.
   * @param assortmentId Key property. See {@link RetailAssortmentChannelLines.assortmentId}.
   * @param partyNumber Key property. See {@link RetailAssortmentChannelLines.partyNumber}.
   * @param organizationHierarchyType Key property. See {@link RetailAssortmentChannelLines.organizationHierarchyType}.
   * @param status Key property. See {@link RetailAssortmentChannelLines.status}.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortmentChannelLines`.
   */
  delete(
    assortmentId: string,
    partyNumber: string,
    organizationHierarchyType: string,
    status: RetailAssortmentStatusType
  ): DeleteRequestBuilder<RetailAssortmentChannelLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailAssortmentChannelLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailAssortmentChannelLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailAssortmentChannelLines<T>
  ): DeleteRequestBuilder<RetailAssortmentChannelLines<T>, T>;
  delete(
    assortmentIdOrEntity: any,
    partyNumber?: string,
    organizationHierarchyType?: string,
    status?: RetailAssortmentStatusType
  ): DeleteRequestBuilder<RetailAssortmentChannelLines<T>, T> {
    return new DeleteRequestBuilder<RetailAssortmentChannelLines<T>, T>(
      this.entityApi,
      assortmentIdOrEntity instanceof RetailAssortmentChannelLines
        ? assortmentIdOrEntity
        : {
            AssortmentId: assortmentIdOrEntity!,
            PartyNumber: partyNumber!,
            OrganizationHierarchyType: organizationHierarchyType!,
            Status: status!
          }
    );
  }
}
