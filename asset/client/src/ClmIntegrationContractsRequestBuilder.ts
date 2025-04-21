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
import { ClmIntegrationContracts } from './ClmIntegrationContracts';

/**
 * Request builder class for operations supported on the {@link ClmIntegrationContracts} entity.
 */
export class ClmIntegrationContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ClmIntegrationContracts<T>, T> {
  /**
   * Returns a request builder for querying all `ClmIntegrationContracts` entities.
   * @returns A request builder for creating requests to retrieve all `ClmIntegrationContracts` entities.
   */
  getAll(): GetAllRequestBuilder<ClmIntegrationContracts<T>, T> {
    return new GetAllRequestBuilder<ClmIntegrationContracts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ClmIntegrationContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ClmIntegrationContracts`.
   */
  create(
    entity: ClmIntegrationContracts<T>
  ): CreateRequestBuilder<ClmIntegrationContracts<T>, T> {
    return new CreateRequestBuilder<ClmIntegrationContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ClmIntegrationContracts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ClmIntegrationContracts.dataAreaId}.
   * @param contractId Key property. See {@link ClmIntegrationContracts.contractId}.
   * @returns A request builder for creating requests to retrieve one `ClmIntegrationContracts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ClmIntegrationContracts<T>, T> {
    return new GetByKeyRequestBuilder<ClmIntegrationContracts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContractId: contractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ClmIntegrationContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ClmIntegrationContracts`.
   */
  update(
    entity: ClmIntegrationContracts<T>
  ): UpdateRequestBuilder<ClmIntegrationContracts<T>, T> {
    return new UpdateRequestBuilder<ClmIntegrationContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationContracts`.
   * @param dataAreaId Key property. See {@link ClmIntegrationContracts.dataAreaId}.
   * @param contractId Key property. See {@link ClmIntegrationContracts.contractId}.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationContracts`.
   */
  delete(
    dataAreaId: string,
    contractId: string
  ): DeleteRequestBuilder<ClmIntegrationContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ClmIntegrationContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ClmIntegrationContracts` by taking the entity as a parameter.
   */
  delete(
    entity: ClmIntegrationContracts<T>
  ): DeleteRequestBuilder<ClmIntegrationContracts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contractId?: string
  ): DeleteRequestBuilder<ClmIntegrationContracts<T>, T> {
    return new DeleteRequestBuilder<ClmIntegrationContracts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ClmIntegrationContracts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContractId: contractId!
          }
    );
  }
}
