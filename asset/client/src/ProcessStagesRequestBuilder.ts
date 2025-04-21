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
import { ProcessStages } from './ProcessStages';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * Request builder class for operations supported on the {@link ProcessStages} entity.
 */
export class ProcessStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessStages<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessStages` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessStages` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessStages<T>, T> {
    return new GetAllRequestBuilder<ProcessStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessStages`.
   */
  create(entity: ProcessStages<T>): CreateRequestBuilder<ProcessStages<T>, T> {
    return new CreateRequestBuilder<ProcessStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessStages` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessStages.dataAreaId}.
   * @param processType Key property. See {@link ProcessStages.processType}.
   * @param name Key property. See {@link ProcessStages.name}.
   * @returns A request builder for creating requests to retrieve one `ProcessStages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessStages<T>, T> {
    return new GetByKeyRequestBuilder<ProcessStages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProcessType: processType,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessStages`.
   */
  update(entity: ProcessStages<T>): UpdateRequestBuilder<ProcessStages<T>, T> {
    return new UpdateRequestBuilder<ProcessStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessStages`.
   * @param dataAreaId Key property. See {@link ProcessStages.dataAreaId}.
   * @param processType Key property. See {@link ProcessStages.processType}.
   * @param name Key property. See {@link ProcessStages.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessStages`.
   */
  delete(
    dataAreaId: string,
    processType: BusinessProcessType,
    name: string
  ): DeleteRequestBuilder<ProcessStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessStages` by taking the entity as a parameter.
   */
  delete(entity: ProcessStages<T>): DeleteRequestBuilder<ProcessStages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processType?: BusinessProcessType,
    name?: string
  ): DeleteRequestBuilder<ProcessStages<T>, T> {
    return new DeleteRequestBuilder<ProcessStages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessStages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProcessType: processType!,
            Name: name!
          }
    );
  }
}
