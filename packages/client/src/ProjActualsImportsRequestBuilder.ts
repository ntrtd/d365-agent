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
import { ProjActualsImports } from './ProjActualsImports';

/**
 * Request builder class for operations supported on the {@link ProjActualsImports} entity.
 */
export class ProjActualsImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjActualsImports<T>, T> {
  /**
   * Returns a request builder for querying all `ProjActualsImports` entities.
   * @returns A request builder for creating requests to retrieve all `ProjActualsImports` entities.
   */
  getAll(): GetAllRequestBuilder<ProjActualsImports<T>, T> {
    return new GetAllRequestBuilder<ProjActualsImports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjActualsImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjActualsImports`.
   */
  create(
    entity: ProjActualsImports<T>
  ): CreateRequestBuilder<ProjActualsImports<T>, T> {
    return new CreateRequestBuilder<ProjActualsImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjActualsImports` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjActualsImports.dataAreaId}.
   * @param actualsImportId Key property. See {@link ProjActualsImports.actualsImportId}.
   * @returns A request builder for creating requests to retrieve one `ProjActualsImports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    actualsImportId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProjActualsImports<T>, T> {
    return new GetByKeyRequestBuilder<ProjActualsImports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ActualsImportId: actualsImportId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjActualsImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjActualsImports`.
   */
  update(
    entity: ProjActualsImports<T>
  ): UpdateRequestBuilder<ProjActualsImports<T>, T> {
    return new UpdateRequestBuilder<ProjActualsImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjActualsImports`.
   * @param dataAreaId Key property. See {@link ProjActualsImports.dataAreaId}.
   * @param actualsImportId Key property. See {@link ProjActualsImports.actualsImportId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjActualsImports`.
   */
  delete(
    dataAreaId: string,
    actualsImportId: string
  ): DeleteRequestBuilder<ProjActualsImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjActualsImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjActualsImports` by taking the entity as a parameter.
   */
  delete(
    entity: ProjActualsImports<T>
  ): DeleteRequestBuilder<ProjActualsImports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    actualsImportId?: string
  ): DeleteRequestBuilder<ProjActualsImports<T>, T> {
    return new DeleteRequestBuilder<ProjActualsImports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjActualsImports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ActualsImportId: actualsImportId!
          }
    );
  }
}
