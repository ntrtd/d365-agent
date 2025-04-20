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
import { RetailReturnPolicyLines } from './RetailReturnPolicyLines';

/**
 * Request builder class for operations supported on the {@link RetailReturnPolicyLines} entity.
 */
export class RetailReturnPolicyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReturnPolicyLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReturnPolicyLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReturnPolicyLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReturnPolicyLines<T>, T> {
    return new GetAllRequestBuilder<RetailReturnPolicyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailReturnPolicyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReturnPolicyLines`.
   */
  create(
    entity: RetailReturnPolicyLines<T>
  ): CreateRequestBuilder<RetailReturnPolicyLines<T>, T> {
    return new CreateRequestBuilder<RetailReturnPolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReturnPolicyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReturnPolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnPolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnPolicyLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailReturnPolicyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailReturnPolicyLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailReturnPolicyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyNumber: policyNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReturnPolicyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReturnPolicyLines`.
   */
  update(
    entity: RetailReturnPolicyLines<T>
  ): UpdateRequestBuilder<RetailReturnPolicyLines<T>, T> {
    return new UpdateRequestBuilder<RetailReturnPolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReturnPolicyLines`.
   * @param dataAreaId Key property. See {@link RetailReturnPolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnPolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnPolicyLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnPolicyLines`.
   */
  delete(
    dataAreaId: string,
    policyNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailReturnPolicyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReturnPolicyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnPolicyLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReturnPolicyLines<T>
  ): DeleteRequestBuilder<RetailReturnPolicyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailReturnPolicyLines<T>, T> {
    return new DeleteRequestBuilder<RetailReturnPolicyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReturnPolicyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyNumber: policyNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
