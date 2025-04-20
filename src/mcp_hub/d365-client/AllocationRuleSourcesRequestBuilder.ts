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
import { AllocationRuleSources } from './AllocationRuleSources';

/**
 * Request builder class for operations supported on the {@link AllocationRuleSources} entity.
 */
export class AllocationRuleSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationRuleSources<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationRuleSources` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationRuleSources` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationRuleSources<T>, T> {
    return new GetAllRequestBuilder<AllocationRuleSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AllocationRuleSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationRuleSources`.
   */
  create(
    entity: AllocationRuleSources<T>
  ): CreateRequestBuilder<AllocationRuleSources<T>, T> {
    return new CreateRequestBuilder<AllocationRuleSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationRuleSources` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationRuleSources.dataAreaId}.
   * @param rule Key property. See {@link AllocationRuleSources.rule}.
   * @param lineNumber Key property. See {@link AllocationRuleSources.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AllocationRuleSources` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rule: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AllocationRuleSources<T>, T> {
    return new GetByKeyRequestBuilder<AllocationRuleSources<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Rule: rule,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationRuleSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationRuleSources`.
   */
  update(
    entity: AllocationRuleSources<T>
  ): UpdateRequestBuilder<AllocationRuleSources<T>, T> {
    return new UpdateRequestBuilder<AllocationRuleSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationRuleSources`.
   * @param dataAreaId Key property. See {@link AllocationRuleSources.dataAreaId}.
   * @param rule Key property. See {@link AllocationRuleSources.rule}.
   * @param lineNumber Key property. See {@link AllocationRuleSources.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRuleSources`.
   */
  delete(
    dataAreaId: string,
    rule: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AllocationRuleSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationRuleSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRuleSources` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationRuleSources<T>
  ): DeleteRequestBuilder<AllocationRuleSources<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rule?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AllocationRuleSources<T>, T> {
    return new DeleteRequestBuilder<AllocationRuleSources<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationRuleSources
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Rule: rule!,
            LineNumber: lineNumber!
          }
    );
  }
}
