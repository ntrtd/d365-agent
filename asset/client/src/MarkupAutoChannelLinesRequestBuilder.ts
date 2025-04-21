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
import { MarkupAutoChannelLines } from './MarkupAutoChannelLines';

/**
 * Request builder class for operations supported on the {@link MarkupAutoChannelLines} entity.
 */
export class MarkupAutoChannelLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarkupAutoChannelLines<T>, T> {
  /**
   * Returns a request builder for querying all `MarkupAutoChannelLines` entities.
   * @returns A request builder for creating requests to retrieve all `MarkupAutoChannelLines` entities.
   */
  getAll(): GetAllRequestBuilder<MarkupAutoChannelLines<T>, T> {
    return new GetAllRequestBuilder<MarkupAutoChannelLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarkupAutoChannelLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarkupAutoChannelLines`.
   */
  create(
    entity: MarkupAutoChannelLines<T>
  ): CreateRequestBuilder<MarkupAutoChannelLines<T>, T> {
    return new CreateRequestBuilder<MarkupAutoChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarkupAutoChannelLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarkupAutoChannelLines.dataAreaId}.
   * @param omInternalOrganizationPartyNumber Key property. See {@link MarkupAutoChannelLines.omInternalOrganizationPartyNumber}.
   * @param omHierarchyTypeName Key property. See {@link MarkupAutoChannelLines.omHierarchyTypeName}.
   * @param retailChannelRelation Key property. See {@link MarkupAutoChannelLines.retailChannelRelation}.
   * @returns A request builder for creating requests to retrieve one `MarkupAutoChannelLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    omInternalOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    omHierarchyTypeName: DeserializedType<T, 'Edm.String'>,
    retailChannelRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MarkupAutoChannelLines<T>, T> {
    return new GetByKeyRequestBuilder<MarkupAutoChannelLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OMInternalOrganization_PartyNumber: omInternalOrganizationPartyNumber,
        OMHierarchyType_Name: omHierarchyTypeName,
        RetailChannelRelation: retailChannelRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarkupAutoChannelLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarkupAutoChannelLines`.
   */
  update(
    entity: MarkupAutoChannelLines<T>
  ): UpdateRequestBuilder<MarkupAutoChannelLines<T>, T> {
    return new UpdateRequestBuilder<MarkupAutoChannelLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarkupAutoChannelLines`.
   * @param dataAreaId Key property. See {@link MarkupAutoChannelLines.dataAreaId}.
   * @param omInternalOrganizationPartyNumber Key property. See {@link MarkupAutoChannelLines.omInternalOrganizationPartyNumber}.
   * @param omHierarchyTypeName Key property. See {@link MarkupAutoChannelLines.omHierarchyTypeName}.
   * @param retailChannelRelation Key property. See {@link MarkupAutoChannelLines.retailChannelRelation}.
   * @returns A request builder for creating requests that delete an entity of type `MarkupAutoChannelLines`.
   */
  delete(
    dataAreaId: string,
    omInternalOrganizationPartyNumber: string,
    omHierarchyTypeName: string,
    retailChannelRelation: string
  ): DeleteRequestBuilder<MarkupAutoChannelLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarkupAutoChannelLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarkupAutoChannelLines` by taking the entity as a parameter.
   */
  delete(
    entity: MarkupAutoChannelLines<T>
  ): DeleteRequestBuilder<MarkupAutoChannelLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    omInternalOrganizationPartyNumber?: string,
    omHierarchyTypeName?: string,
    retailChannelRelation?: string
  ): DeleteRequestBuilder<MarkupAutoChannelLines<T>, T> {
    return new DeleteRequestBuilder<MarkupAutoChannelLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarkupAutoChannelLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OMInternalOrganization_PartyNumber:
              omInternalOrganizationPartyNumber!,
            OMHierarchyType_Name: omHierarchyTypeName!,
            RetailChannelRelation: retailChannelRelation!
          }
    );
  }
}
