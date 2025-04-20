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
import { EfDocTechResponsibleInformations } from './EfDocTechResponsibleInformations';

/**
 * Request builder class for operations supported on the {@link EfDocTechResponsibleInformations} entity.
 */
export class EfDocTechResponsibleInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocTechResponsibleInformations<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocTechResponsibleInformations` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocTechResponsibleInformations` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocTechResponsibleInformations<T>, T> {
    return new GetAllRequestBuilder<EfDocTechResponsibleInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EfDocTechResponsibleInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocTechResponsibleInformations`.
   */
  create(
    entity: EfDocTechResponsibleInformations<T>
  ): CreateRequestBuilder<EfDocTechResponsibleInformations<T>, T> {
    return new CreateRequestBuilder<EfDocTechResponsibleInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocTechResponsibleInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link EfDocTechResponsibleInformations.dataAreaId}.
   * @param state Key property. See {@link EfDocTechResponsibleInformations.state}.
   * @returns A request builder for creating requests to retrieve one `EfDocTechResponsibleInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    state: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocTechResponsibleInformations<T>, T> {
    return new GetByKeyRequestBuilder<EfDocTechResponsibleInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        State: state
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocTechResponsibleInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocTechResponsibleInformations`.
   */
  update(
    entity: EfDocTechResponsibleInformations<T>
  ): UpdateRequestBuilder<EfDocTechResponsibleInformations<T>, T> {
    return new UpdateRequestBuilder<EfDocTechResponsibleInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocTechResponsibleInformations`.
   * @param dataAreaId Key property. See {@link EfDocTechResponsibleInformations.dataAreaId}.
   * @param state Key property. See {@link EfDocTechResponsibleInformations.state}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocTechResponsibleInformations`.
   */
  delete(
    dataAreaId: string,
    state: string
  ): DeleteRequestBuilder<EfDocTechResponsibleInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocTechResponsibleInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocTechResponsibleInformations` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocTechResponsibleInformations<T>
  ): DeleteRequestBuilder<EfDocTechResponsibleInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    state?: string
  ): DeleteRequestBuilder<EfDocTechResponsibleInformations<T>, T> {
    return new DeleteRequestBuilder<EfDocTechResponsibleInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EfDocTechResponsibleInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            State: state!
          }
    );
  }
}
