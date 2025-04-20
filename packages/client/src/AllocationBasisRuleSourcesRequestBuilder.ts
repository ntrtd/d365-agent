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
import { AllocationBasisRuleSources } from './AllocationBasisRuleSources';

/**
 * Request builder class for operations supported on the {@link AllocationBasisRuleSources} entity.
 */
export class AllocationBasisRuleSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AllocationBasisRuleSources<T>, T> {
  /**
   * Returns a request builder for querying all `AllocationBasisRuleSources` entities.
   * @returns A request builder for creating requests to retrieve all `AllocationBasisRuleSources` entities.
   */
  getAll(): GetAllRequestBuilder<AllocationBasisRuleSources<T>, T> {
    return new GetAllRequestBuilder<AllocationBasisRuleSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AllocationBasisRuleSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AllocationBasisRuleSources`.
   */
  create(
    entity: AllocationBasisRuleSources<T>
  ): CreateRequestBuilder<AllocationBasisRuleSources<T>, T> {
    return new CreateRequestBuilder<AllocationBasisRuleSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AllocationBasisRuleSources` entity based on its keys.
   * @param dataAreaId Key property. See {@link AllocationBasisRuleSources.dataAreaId}.
   * @param basisId Key property. See {@link AllocationBasisRuleSources.basisId}.
   * @param lineNumber Key property. See {@link AllocationBasisRuleSources.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AllocationBasisRuleSources` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    basisId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AllocationBasisRuleSources<T>, T> {
    return new GetByKeyRequestBuilder<AllocationBasisRuleSources<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BasisId: basisId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AllocationBasisRuleSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AllocationBasisRuleSources`.
   */
  update(
    entity: AllocationBasisRuleSources<T>
  ): UpdateRequestBuilder<AllocationBasisRuleSources<T>, T> {
    return new UpdateRequestBuilder<AllocationBasisRuleSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AllocationBasisRuleSources`.
   * @param dataAreaId Key property. See {@link AllocationBasisRuleSources.dataAreaId}.
   * @param basisId Key property. See {@link AllocationBasisRuleSources.basisId}.
   * @param lineNumber Key property. See {@link AllocationBasisRuleSources.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AllocationBasisRuleSources`.
   */
  delete(
    dataAreaId: string,
    basisId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AllocationBasisRuleSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AllocationBasisRuleSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AllocationBasisRuleSources` by taking the entity as a parameter.
   */
  delete(
    entity: AllocationBasisRuleSources<T>
  ): DeleteRequestBuilder<AllocationBasisRuleSources<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    basisId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AllocationBasisRuleSources<T>, T> {
    return new DeleteRequestBuilder<AllocationBasisRuleSources<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AllocationBasisRuleSources
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BasisId: basisId!,
            LineNumber: lineNumber!
          }
    );
  }
}
