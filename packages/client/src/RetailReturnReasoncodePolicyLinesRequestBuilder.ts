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
import { RetailReturnReasoncodePolicyLines } from './RetailReturnReasoncodePolicyLines';

/**
 * Request builder class for operations supported on the {@link RetailReturnReasoncodePolicyLines} entity.
 */
export class RetailReturnReasoncodePolicyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReturnReasoncodePolicyLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReturnReasoncodePolicyLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
    return new GetAllRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailReturnReasoncodePolicyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReturnReasoncodePolicyLines`.
   */
  create(
    entity: RetailReturnReasoncodePolicyLines<T>
  ): CreateRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
    return new CreateRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReturnReasoncodePolicyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReturnReasoncodePolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnReasoncodePolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnReasoncodePolicyLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailReturnReasoncodePolicyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyNumber: policyNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReturnReasoncodePolicyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReturnReasoncodePolicyLines`.
   */
  update(
    entity: RetailReturnReasoncodePolicyLines<T>
  ): UpdateRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
    return new UpdateRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReturnReasoncodePolicyLines`.
   * @param dataAreaId Key property. See {@link RetailReturnReasoncodePolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnReasoncodePolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnReasoncodePolicyLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnReasoncodePolicyLines`.
   */
  delete(
    dataAreaId: string,
    policyNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReturnReasoncodePolicyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnReasoncodePolicyLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReturnReasoncodePolicyLines<T>
  ): DeleteRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T> {
    return new DeleteRequestBuilder<RetailReturnReasoncodePolicyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReturnReasoncodePolicyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyNumber: policyNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
