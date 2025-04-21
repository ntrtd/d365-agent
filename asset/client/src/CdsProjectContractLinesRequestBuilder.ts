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
import { CdsProjectContractLines } from './CdsProjectContractLines';

/**
 * Request builder class for operations supported on the {@link CdsProjectContractLines} entity.
 */
export class CdsProjectContractLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsProjectContractLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsProjectContractLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsProjectContractLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsProjectContractLines<T>, T> {
    return new GetAllRequestBuilder<CdsProjectContractLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsProjectContractLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsProjectContractLines`.
   */
  create(
    entity: CdsProjectContractLines<T>
  ): CreateRequestBuilder<CdsProjectContractLines<T>, T> {
    return new CreateRequestBuilder<CdsProjectContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsProjectContractLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsProjectContractLines.dataAreaId}.
   * @param contractId Key property. See {@link CdsProjectContractLines.contractId}.
   * @param contractLine Key property. See {@link CdsProjectContractLines.contractLine}.
   * @returns A request builder for creating requests to retrieve one `CdsProjectContractLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractId: DeserializedType<T, 'Edm.String'>,
    contractLine: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsProjectContractLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsProjectContractLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractId: contractId,
        ContractLine: contractLine
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsProjectContractLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsProjectContractLines`.
   */
  update(
    entity: CdsProjectContractLines<T>
  ): UpdateRequestBuilder<CdsProjectContractLines<T>, T> {
    return new UpdateRequestBuilder<CdsProjectContractLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContractLines`.
   * @param dataAreaId Key property. See {@link CdsProjectContractLines.dataAreaId}.
   * @param contractId Key property. See {@link CdsProjectContractLines.contractId}.
   * @param contractLine Key property. See {@link CdsProjectContractLines.contractLine}.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContractLines`.
   */
  delete(
    dataAreaId: string,
    contractId: string,
    contractLine: number
  ): DeleteRequestBuilder<CdsProjectContractLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContractLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContractLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsProjectContractLines<T>
  ): DeleteRequestBuilder<CdsProjectContractLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractId?: string,
    contractLine?: number
  ): DeleteRequestBuilder<CdsProjectContractLines<T>, T> {
    return new DeleteRequestBuilder<CdsProjectContractLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsProjectContractLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractId: contractId!,
            ContractLine: contractLine!
          }
    );
  }
}
