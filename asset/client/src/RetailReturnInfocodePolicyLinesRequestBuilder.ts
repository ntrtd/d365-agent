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
import { RetailReturnInfocodePolicyLines } from './RetailReturnInfocodePolicyLines';

/**
 * Request builder class for operations supported on the {@link RetailReturnInfocodePolicyLines} entity.
 */
export class RetailReturnInfocodePolicyLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailReturnInfocodePolicyLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailReturnInfocodePolicyLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
    return new GetAllRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailReturnInfocodePolicyLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailReturnInfocodePolicyLines`.
   */
  create(
    entity: RetailReturnInfocodePolicyLines<T>
  ): CreateRequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
    return new CreateRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailReturnInfocodePolicyLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailReturnInfocodePolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnInfocodePolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnInfocodePolicyLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailReturnInfocodePolicyLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    policyNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PolicyNumber: policyNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailReturnInfocodePolicyLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailReturnInfocodePolicyLines`.
   */
  update(
    entity: RetailReturnInfocodePolicyLines<T>
  ): UpdateRequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
    return new UpdateRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailReturnInfocodePolicyLines`.
   * @param dataAreaId Key property. See {@link RetailReturnInfocodePolicyLines.dataAreaId}.
   * @param policyNumber Key property. See {@link RetailReturnInfocodePolicyLines.policyNumber}.
   * @param lineNumber Key property. See {@link RetailReturnInfocodePolicyLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnInfocodePolicyLines`.
   */
  delete(
    dataAreaId: string,
    policyNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailReturnInfocodePolicyLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailReturnInfocodePolicyLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailReturnInfocodePolicyLines<T>
  ): DeleteRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    policyNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailReturnInfocodePolicyLines<T>, T> {
    return new DeleteRequestBuilder<RetailReturnInfocodePolicyLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailReturnInfocodePolicyLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PolicyNumber: policyNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
