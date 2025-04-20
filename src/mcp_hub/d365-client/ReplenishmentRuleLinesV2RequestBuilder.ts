/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ReplenishmentRuleLinesV2 } from './ReplenishmentRuleLinesV2';
import { RetailReplenishmentRuleType } from './RetailReplenishmentRuleType';

/**
 * Request builder class for operations supported on the {@link ReplenishmentRuleLinesV2} entity.
 */
export class ReplenishmentRuleLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReplenishmentRuleLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReplenishmentRuleLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
    return new GetAllRequestBuilder<ReplenishmentRuleLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReplenishmentRuleLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReplenishmentRuleLinesV2`.
   */
  create(
    entity: ReplenishmentRuleLinesV2<T>
  ): CreateRequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
    return new CreateRequestBuilder<ReplenishmentRuleLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReplenishmentRuleLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReplenishmentRuleLinesV2.dataAreaId}.
   * @param replenishmentRule Key property. See {@link ReplenishmentRuleLinesV2.replenishmentRule}.
   * @param type Key property. See {@link ReplenishmentRuleLinesV2.type}.
   * @param relationId Key property. See {@link ReplenishmentRuleLinesV2.relationId}.
   * @returns A request builder for creating requests to retrieve one `ReplenishmentRuleLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    replenishmentRule: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailReplenishmentRuleType'
    >,
    relationId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ReplenishmentRuleLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReplenishmentRule: replenishmentRule,
        Type: type,
        RelationId: relationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReplenishmentRuleLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReplenishmentRuleLinesV2`.
   */
  update(
    entity: ReplenishmentRuleLinesV2<T>
  ): UpdateRequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
    return new UpdateRequestBuilder<ReplenishmentRuleLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReplenishmentRuleLinesV2`.
   * @param dataAreaId Key property. See {@link ReplenishmentRuleLinesV2.dataAreaId}.
   * @param replenishmentRule Key property. See {@link ReplenishmentRuleLinesV2.replenishmentRule}.
   * @param type Key property. See {@link ReplenishmentRuleLinesV2.type}.
   * @param relationId Key property. See {@link ReplenishmentRuleLinesV2.relationId}.
   * @returns A request builder for creating requests that delete an entity of type `ReplenishmentRuleLinesV2`.
   */
  delete(
    dataAreaId: string,
    replenishmentRule: string,
    type: RetailReplenishmentRuleType,
    relationId: BigNumber
  ): DeleteRequestBuilder<ReplenishmentRuleLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReplenishmentRuleLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReplenishmentRuleLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReplenishmentRuleLinesV2<T>
  ): DeleteRequestBuilder<ReplenishmentRuleLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    replenishmentRule?: string,
    type?: RetailReplenishmentRuleType,
    relationId?: BigNumber
  ): DeleteRequestBuilder<ReplenishmentRuleLinesV2<T>, T> {
    return new DeleteRequestBuilder<ReplenishmentRuleLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReplenishmentRuleLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReplenishmentRule: replenishmentRule!,
            Type: type!,
            RelationId: relationId!
          }
    );
  }
}
