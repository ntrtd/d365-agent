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
import { DimensionRuleGoups } from './DimensionRuleGoups';

/**
 * Request builder class for operations supported on the {@link DimensionRuleGoups} entity.
 */
export class DimensionRuleGoupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionRuleGoups<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionRuleGoups` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionRuleGoups` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionRuleGoups<T>, T> {
    return new GetAllRequestBuilder<DimensionRuleGoups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DimensionRuleGoups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionRuleGoups`.
   */
  create(
    entity: DimensionRuleGoups<T>
  ): CreateRequestBuilder<DimensionRuleGoups<T>, T> {
    return new CreateRequestBuilder<DimensionRuleGoups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionRuleGoups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimensionRuleGoups.dataAreaId}.
   * @param ruleGroupId Key property. See {@link DimensionRuleGoups.ruleGroupId}.
   * @param dimesionRuleGroupId Key property. See {@link DimensionRuleGoups.dimesionRuleGroupId}.
   * @returns A request builder for creating requests to retrieve one `DimensionRuleGoups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleGroupId: DeserializedType<T, 'Edm.String'>,
    dimesionRuleGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimensionRuleGoups<T>, T> {
    return new GetByKeyRequestBuilder<DimensionRuleGoups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleGroupId: ruleGroupId,
        DimesionRuleGroupId: dimesionRuleGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionRuleGoups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionRuleGoups`.
   */
  update(
    entity: DimensionRuleGoups<T>
  ): UpdateRequestBuilder<DimensionRuleGoups<T>, T> {
    return new UpdateRequestBuilder<DimensionRuleGoups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionRuleGoups`.
   * @param dataAreaId Key property. See {@link DimensionRuleGoups.dataAreaId}.
   * @param ruleGroupId Key property. See {@link DimensionRuleGoups.ruleGroupId}.
   * @param dimesionRuleGroupId Key property. See {@link DimensionRuleGoups.dimesionRuleGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionRuleGoups`.
   */
  delete(
    dataAreaId: string,
    ruleGroupId: string,
    dimesionRuleGroupId: string
  ): DeleteRequestBuilder<DimensionRuleGoups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionRuleGoups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionRuleGoups` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionRuleGoups<T>
  ): DeleteRequestBuilder<DimensionRuleGoups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleGroupId?: string,
    dimesionRuleGroupId?: string
  ): DeleteRequestBuilder<DimensionRuleGoups<T>, T> {
    return new DeleteRequestBuilder<DimensionRuleGoups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimensionRuleGoups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleGroupId: ruleGroupId!,
            DimesionRuleGroupId: dimesionRuleGroupId!
          }
    );
  }
}
