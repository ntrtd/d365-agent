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
import { RetailItemLabelSetups } from './RetailItemLabelSetups';
import { RetailLabelTypeBase } from './RetailLabelTypeBase';

/**
 * Request builder class for operations supported on the {@link RetailItemLabelSetups} entity.
 */
export class RetailItemLabelSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailItemLabelSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailItemLabelSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailItemLabelSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailItemLabelSetups<T>, T> {
    return new GetAllRequestBuilder<RetailItemLabelSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailItemLabelSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailItemLabelSetups`.
   */
  create(
    entity: RetailItemLabelSetups<T>
  ): CreateRequestBuilder<RetailItemLabelSetups<T>, T> {
    return new CreateRequestBuilder<RetailItemLabelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailItemLabelSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailItemLabelSetups.dataAreaId}.
   * @param labelType Key property. See {@link RetailItemLabelSetups.labelType}.
   * @param itemId Key property. See {@link RetailItemLabelSetups.itemId}.
   * @param organizationHierarchyTypeName Key property. See {@link RetailItemLabelSetups.organizationHierarchyTypeName}.
   * @param organizationPartyNumber Key property. See {@link RetailItemLabelSetups.organizationPartyNumber}.
   * @param reportName Key property. See {@link RetailItemLabelSetups.reportName}.
   * @returns A request builder for creating requests to retrieve one `RetailItemLabelSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    labelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailLabelTypeBase'
    >,
    itemId: DeserializedType<T, 'Edm.String'>,
    organizationHierarchyTypeName: DeserializedType<T, 'Edm.String'>,
    organizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    reportName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailItemLabelSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailItemLabelSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LabelType: labelType,
        ItemId: itemId,
        OrganizationHierarchyTypeName: organizationHierarchyTypeName,
        OrganizationPartyNumber: organizationPartyNumber,
        ReportName: reportName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailItemLabelSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailItemLabelSetups`.
   */
  update(
    entity: RetailItemLabelSetups<T>
  ): UpdateRequestBuilder<RetailItemLabelSetups<T>, T> {
    return new UpdateRequestBuilder<RetailItemLabelSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabelSetups`.
   * @param dataAreaId Key property. See {@link RetailItemLabelSetups.dataAreaId}.
   * @param labelType Key property. See {@link RetailItemLabelSetups.labelType}.
   * @param itemId Key property. See {@link RetailItemLabelSetups.itemId}.
   * @param organizationHierarchyTypeName Key property. See {@link RetailItemLabelSetups.organizationHierarchyTypeName}.
   * @param organizationPartyNumber Key property. See {@link RetailItemLabelSetups.organizationPartyNumber}.
   * @param reportName Key property. See {@link RetailItemLabelSetups.reportName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabelSetups`.
   */
  delete(
    dataAreaId: string,
    labelType: RetailLabelTypeBase,
    itemId: string,
    organizationHierarchyTypeName: string,
    organizationPartyNumber: string,
    reportName: string
  ): DeleteRequestBuilder<RetailItemLabelSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailItemLabelSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailItemLabelSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailItemLabelSetups<T>
  ): DeleteRequestBuilder<RetailItemLabelSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    labelType?: RetailLabelTypeBase,
    itemId?: string,
    organizationHierarchyTypeName?: string,
    organizationPartyNumber?: string,
    reportName?: string
  ): DeleteRequestBuilder<RetailItemLabelSetups<T>, T> {
    return new DeleteRequestBuilder<RetailItemLabelSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailItemLabelSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LabelType: labelType!,
            ItemId: itemId!,
            OrganizationHierarchyTypeName: organizationHierarchyTypeName!,
            OrganizationPartyNumber: organizationPartyNumber!,
            ReportName: reportName!
          }
    );
  }
}
