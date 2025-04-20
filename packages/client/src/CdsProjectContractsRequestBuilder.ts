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
import { CdsProjectContracts } from './CdsProjectContracts';

/**
 * Request builder class for operations supported on the {@link CdsProjectContracts} entity.
 */
export class CdsProjectContractsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsProjectContracts<T>, T> {
  /**
   * Returns a request builder for querying all `CdsProjectContracts` entities.
   * @returns A request builder for creating requests to retrieve all `CdsProjectContracts` entities.
   */
  getAll(): GetAllRequestBuilder<CdsProjectContracts<T>, T> {
    return new GetAllRequestBuilder<CdsProjectContracts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsProjectContracts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsProjectContracts`.
   */
  create(
    entity: CdsProjectContracts<T>
  ): CreateRequestBuilder<CdsProjectContracts<T>, T> {
    return new CreateRequestBuilder<CdsProjectContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsProjectContracts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsProjectContracts.dataAreaId}.
   * @param projectContractId Key property. See {@link CdsProjectContracts.projectContractId}.
   * @returns A request builder for creating requests to retrieve one `CdsProjectContracts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsProjectContracts<T>, T> {
    return new GetByKeyRequestBuilder<CdsProjectContracts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractID: projectContractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsProjectContracts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsProjectContracts`.
   */
  update(
    entity: CdsProjectContracts<T>
  ): UpdateRequestBuilder<CdsProjectContracts<T>, T> {
    return new UpdateRequestBuilder<CdsProjectContracts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContracts`.
   * @param dataAreaId Key property. See {@link CdsProjectContracts.dataAreaId}.
   * @param projectContractId Key property. See {@link CdsProjectContracts.projectContractId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContracts`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string
  ): DeleteRequestBuilder<CdsProjectContracts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContracts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContracts` by taking the entity as a parameter.
   */
  delete(
    entity: CdsProjectContracts<T>
  ): DeleteRequestBuilder<CdsProjectContracts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string
  ): DeleteRequestBuilder<CdsProjectContracts<T>, T> {
    return new DeleteRequestBuilder<CdsProjectContracts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsProjectContracts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractID: projectContractId!
          }
    );
  }
}
