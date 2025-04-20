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
import { FieldServiceProjProjectCanCreateJournals } from './FieldServiceProjProjectCanCreateJournals';

/**
 * Request builder class for operations supported on the {@link FieldServiceProjProjectCanCreateJournals} entity.
 */
export class FieldServiceProjProjectCanCreateJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T> {
  /**
   * Returns a request builder for querying all `FieldServiceProjProjectCanCreateJournals` entities.
   * @returns A request builder for creating requests to retrieve all `FieldServiceProjProjectCanCreateJournals` entities.
   */
  getAll(): GetAllRequestBuilder<
    FieldServiceProjProjectCanCreateJournals<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FieldServiceProjProjectCanCreateJournals<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FieldServiceProjProjectCanCreateJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FieldServiceProjProjectCanCreateJournals`.
   */
  create(
    entity: FieldServiceProjProjectCanCreateJournals<T>
  ): CreateRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T> {
    return new CreateRequestBuilder<
      FieldServiceProjProjectCanCreateJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FieldServiceProjProjectCanCreateJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link FieldServiceProjProjectCanCreateJournals.dataAreaId}.
   * @param projId Key property. See {@link FieldServiceProjProjectCanCreateJournals.projId}.
   * @returns A request builder for creating requests to retrieve one `FieldServiceProjProjectCanCreateJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T> {
    return new GetByKeyRequestBuilder<
      FieldServiceProjProjectCanCreateJournals<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjId: projId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FieldServiceProjProjectCanCreateJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FieldServiceProjProjectCanCreateJournals`.
   */
  update(
    entity: FieldServiceProjProjectCanCreateJournals<T>
  ): UpdateRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T> {
    return new UpdateRequestBuilder<
      FieldServiceProjProjectCanCreateJournals<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FieldServiceProjProjectCanCreateJournals`.
   * @param dataAreaId Key property. See {@link FieldServiceProjProjectCanCreateJournals.dataAreaId}.
   * @param projId Key property. See {@link FieldServiceProjProjectCanCreateJournals.projId}.
   * @returns A request builder for creating requests that delete an entity of type `FieldServiceProjProjectCanCreateJournals`.
   */
  delete(
    dataAreaId: string,
    projId: string
  ): DeleteRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FieldServiceProjProjectCanCreateJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FieldServiceProjProjectCanCreateJournals` by taking the entity as a parameter.
   */
  delete(
    entity: FieldServiceProjProjectCanCreateJournals<T>
  ): DeleteRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projId?: string
  ): DeleteRequestBuilder<FieldServiceProjProjectCanCreateJournals<T>, T> {
    return new DeleteRequestBuilder<
      FieldServiceProjProjectCanCreateJournals<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FieldServiceProjProjectCanCreateJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjId: projId!
          }
    );
  }
}
