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
import { RetailReplenishmentRuleLines } from './RetailReplenishmentRuleLines';
import { RetailReplenishmentRuleType } from './RetailReplenishmentRuleType';

/**
 * Request builder class for operations supported on the {@link RetailReplenishmentRuleLines} entity.
 */
export class RetailReplenishmentRuleLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReplenishmentRuleLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReplenishmentRuleLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReplenishmentRuleLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReplenishmentRuleLines<T>, T> {
    return new GetAllRequestBuilder<RetailReplenishmentRuleLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailReplenishmentRuleLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReplenishmentRuleLines`.
   */
  create(
    entity: RetailReplenishmentRuleLines<T>
  ): CreateRequestBuilder<RetailReplenishmentRuleLines<T>, T> {
    return new CreateRequestBuilder<RetailReplenishmentRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReplenishmentRuleLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReplenishmentRuleLines.dataAreaId}.
   * @param replenishmentRule Key property. See {@link RetailReplenishmentRuleLines.replenishmentRule}.
   * @param type Key property. See {@link RetailReplenishmentRuleLines.type}.
   * @param replenishmentHierarchyTypeName Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyTypeName}.
   * @param replenishmentOrganizationPartyNumber Key property. See {@link RetailReplenishmentRuleLines.replenishmentOrganizationPartyNumber}.
   * @param replenishmentHierarchyValidFrom Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyValidFrom}.
   * @param replenishmentHierarchyValidTo Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyValidTo}.
   * @param retailChannelId Key property. See {@link RetailReplenishmentRuleLines.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `RetailReplenishmentRuleLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    replenishmentRule: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailReplenishmentRuleType'
    >,
    replenishmentHierarchyTypeName: DeserializedType<T, 'Edm.String'>,
    replenishmentOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>,
    replenishmentHierarchyValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    replenishmentHierarchyValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailReplenishmentRuleLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailReplenishmentRuleLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReplenishmentRule: replenishmentRule,
        Type: type,
        ReplenishmentHierarchyTypeName: replenishmentHierarchyTypeName,
        ReplenishmentOrganizationPartyNumber:
          replenishmentOrganizationPartyNumber,
        ReplenishmentHierarchyValidFrom: replenishmentHierarchyValidFrom,
        ReplenishmentHierarchyValidTo: replenishmentHierarchyValidTo,
        RetailChannelId: retailChannelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReplenishmentRuleLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReplenishmentRuleLines`.
   */
  update(
    entity: RetailReplenishmentRuleLines<T>
  ): UpdateRequestBuilder<RetailReplenishmentRuleLines<T>, T> {
    return new UpdateRequestBuilder<RetailReplenishmentRuleLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReplenishmentRuleLines`.
   * @param dataAreaId Key property. See {@link RetailReplenishmentRuleLines.dataAreaId}.
   * @param replenishmentRule Key property. See {@link RetailReplenishmentRuleLines.replenishmentRule}.
   * @param type Key property. See {@link RetailReplenishmentRuleLines.type}.
   * @param replenishmentHierarchyTypeName Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyTypeName}.
   * @param replenishmentOrganizationPartyNumber Key property. See {@link RetailReplenishmentRuleLines.replenishmentOrganizationPartyNumber}.
   * @param replenishmentHierarchyValidFrom Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyValidFrom}.
   * @param replenishmentHierarchyValidTo Key property. See {@link RetailReplenishmentRuleLines.replenishmentHierarchyValidTo}.
   * @param retailChannelId Key property. See {@link RetailReplenishmentRuleLines.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReplenishmentRuleLines`.
   */
  delete(
    dataAreaId: string,
    replenishmentRule: string,
    type: RetailReplenishmentRuleType,
    replenishmentHierarchyTypeName: string,
    replenishmentOrganizationPartyNumber: string,
    replenishmentHierarchyValidFrom: Moment,
    replenishmentHierarchyValidTo: Moment,
    retailChannelId: string
  ): DeleteRequestBuilder<RetailReplenishmentRuleLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReplenishmentRuleLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReplenishmentRuleLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReplenishmentRuleLines<T>
  ): DeleteRequestBuilder<RetailReplenishmentRuleLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    replenishmentRule?: string,
    type?: RetailReplenishmentRuleType,
    replenishmentHierarchyTypeName?: string,
    replenishmentOrganizationPartyNumber?: string,
    replenishmentHierarchyValidFrom?: Moment,
    replenishmentHierarchyValidTo?: Moment,
    retailChannelId?: string
  ): DeleteRequestBuilder<RetailReplenishmentRuleLines<T>, T> {
    return new DeleteRequestBuilder<RetailReplenishmentRuleLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReplenishmentRuleLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReplenishmentRule: replenishmentRule!,
            Type: type!,
            ReplenishmentHierarchyTypeName: replenishmentHierarchyTypeName!,
            ReplenishmentOrganizationPartyNumber:
              replenishmentOrganizationPartyNumber!,
            ReplenishmentHierarchyValidFrom: replenishmentHierarchyValidFrom!,
            ReplenishmentHierarchyValidTo: replenishmentHierarchyValidTo!,
            RetailChannelId: retailChannelId!
          }
    );
  }
}
