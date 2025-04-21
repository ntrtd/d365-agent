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
import { AllocationRuleDestinations } from './AllocationRuleDestinations';

/**
 * Request builder class for operations supported on the {@link AllocationRuleDestinations} entity.
 */
export class AllocationRuleDestinationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationRuleDestinations<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationRuleDestinations` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationRuleDestinations` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationRuleDestinations<T>, T> {
    return new GetAllRequestBuilder<AllocationRuleDestinations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AllocationRuleDestinations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationRuleDestinations`.
   */
  create(
    entity: AllocationRuleDestinations<T>
  ): CreateRequestBuilder<AllocationRuleDestinations<T>, T> {
    return new CreateRequestBuilder<AllocationRuleDestinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationRuleDestinations` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationRuleDestinations.dataAreaId}.
   * @param rule Key property. See {@link AllocationRuleDestinations.rule}.
   * @param lineNumber Key property. See {@link AllocationRuleDestinations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AllocationRuleDestinations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rule: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AllocationRuleDestinations<T>, T> {
    return new GetByKeyRequestBuilder<AllocationRuleDestinations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Rule: rule,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationRuleDestinations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationRuleDestinations`.
   */
  update(
    entity: AllocationRuleDestinations<T>
  ): UpdateRequestBuilder<AllocationRuleDestinations<T>, T> {
    return new UpdateRequestBuilder<AllocationRuleDestinations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationRuleDestinations`.
   * @param dataAreaId Key property. See {@link AllocationRuleDestinations.dataAreaId}.
   * @param rule Key property. See {@link AllocationRuleDestinations.rule}.
   * @param lineNumber Key property. See {@link AllocationRuleDestinations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRuleDestinations`.
   */
  delete(
    dataAreaId: string,
    rule: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AllocationRuleDestinations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationRuleDestinations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationRuleDestinations` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationRuleDestinations<T>
  ): DeleteRequestBuilder<AllocationRuleDestinations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rule?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AllocationRuleDestinations<T>, T> {
    return new DeleteRequestBuilder<AllocationRuleDestinations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationRuleDestinations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Rule: rule!,
            LineNumber: lineNumber!
          }
    );
  }
}
