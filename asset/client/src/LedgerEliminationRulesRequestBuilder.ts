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
import { LedgerEliminationRules } from './LedgerEliminationRules';

/**
 * Request builder class for operations supported on the {@link LedgerEliminationRules} entity.
 */
export class LedgerEliminationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerEliminationRules<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerEliminationRules` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerEliminationRules` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerEliminationRules<T>, T> {
    return new GetAllRequestBuilder<LedgerEliminationRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerEliminationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerEliminationRules`.
   */
  create(
    entity: LedgerEliminationRules<T>
  ): CreateRequestBuilder<LedgerEliminationRules<T>, T> {
    return new CreateRequestBuilder<LedgerEliminationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerEliminationRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerEliminationRules.dataAreaId}.
   * @param ruleId Key property. See {@link LedgerEliminationRules.ruleId}.
   * @returns A request builder for creating requests to retrieve one `LedgerEliminationRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ruleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerEliminationRules<T>, T> {
    return new GetByKeyRequestBuilder<LedgerEliminationRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RuleId: ruleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerEliminationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerEliminationRules`.
   */
  update(
    entity: LedgerEliminationRules<T>
  ): UpdateRequestBuilder<LedgerEliminationRules<T>, T> {
    return new UpdateRequestBuilder<LedgerEliminationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerEliminationRules`.
   * @param dataAreaId Key property. See {@link LedgerEliminationRules.dataAreaId}.
   * @param ruleId Key property. See {@link LedgerEliminationRules.ruleId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEliminationRules`.
   */
  delete(
    dataAreaId: string,
    ruleId: string
  ): DeleteRequestBuilder<LedgerEliminationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerEliminationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerEliminationRules` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerEliminationRules<T>
  ): DeleteRequestBuilder<LedgerEliminationRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ruleId?: string
  ): DeleteRequestBuilder<LedgerEliminationRules<T>, T> {
    return new DeleteRequestBuilder<LedgerEliminationRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerEliminationRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RuleId: ruleId!
          }
    );
  }
}
