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
import { ProcessTemplateHeaders } from './ProcessTemplateHeaders';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';

/**
 * Request builder class for operations supported on the {@link ProcessTemplateHeaders} entity.
 */
export class ProcessTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<ProcessTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessTemplateHeaders`.
   */
  create(
    entity: ProcessTemplateHeaders<T>
  ): CreateRequestBuilder<ProcessTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<ProcessTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessTemplateHeaders` entity based on its keys.
   * @param processType Key property. See {@link ProcessTemplateHeaders.processType}.
   * @param genericSubtype Key property. See {@link ProcessTemplateHeaders.genericSubtype}.
   * @param name Key property. See {@link ProcessTemplateHeaders.name}.
   * @returns A request builder for creating requests to retrieve one `ProcessTemplateHeaders` entity based on its keys.
   */
  getByKey(
    processType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    genericSubtype: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessGenericSubtype'
    >,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProcessTemplateHeaders<T>, T>(
      this.entityApi,
      {
        ProcessType: processType,
        GenericSubtype: genericSubtype,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessTemplateHeaders`.
   */
  update(
    entity: ProcessTemplateHeaders<T>
  ): UpdateRequestBuilder<ProcessTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<ProcessTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessTemplateHeaders`.
   * @param processType Key property. See {@link ProcessTemplateHeaders.processType}.
   * @param genericSubtype Key property. See {@link ProcessTemplateHeaders.genericSubtype}.
   * @param name Key property. See {@link ProcessTemplateHeaders.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTemplateHeaders`.
   */
  delete(
    processType: BusinessProcessType,
    genericSubtype: BusinessProcessGenericSubtype,
    name: string
  ): DeleteRequestBuilder<ProcessTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessTemplateHeaders<T>
  ): DeleteRequestBuilder<ProcessTemplateHeaders<T>, T>;
  delete(
    processTypeOrEntity: any,
    genericSubtype?: BusinessProcessGenericSubtype,
    name?: string
  ): DeleteRequestBuilder<ProcessTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<ProcessTemplateHeaders<T>, T>(
      this.entityApi,
      processTypeOrEntity instanceof ProcessTemplateHeaders
        ? processTypeOrEntity
        : {
            ProcessType: processTypeOrEntity!,
            GenericSubtype: genericSubtype!,
            Name: name!
          }
    );
  }
}
