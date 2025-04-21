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
import { ProcessGenericTemplateHeaders } from './ProcessGenericTemplateHeaders';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';

/**
 * Request builder class for operations supported on the {@link ProcessGenericTemplateHeaders} entity.
 */
export class ProcessGenericTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessGenericTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessGenericTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<ProcessGenericTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessGenericTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessGenericTemplateHeaders`.
   */
  create(
    entity: ProcessGenericTemplateHeaders<T>
  ): CreateRequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<ProcessGenericTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessGenericTemplateHeaders` entity based on its keys.
   * @param templateHeaderProcessType Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderProcessType}.
   * @param templateHeaderGenericSubtype Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderGenericSubtype}.
   * @param templateHeaderName Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderName}.
   * @returns A request builder for creating requests to retrieve one `ProcessGenericTemplateHeaders` entity based on its keys.
   */
  getByKey(
    templateHeaderProcessType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    templateHeaderGenericSubtype: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessGenericSubtype'
    >,
    templateHeaderName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProcessGenericTemplateHeaders<T>, T>(
      this.entityApi,
      {
        TemplateHeader_ProcessType: templateHeaderProcessType,
        TemplateHeader_GenericSubtype: templateHeaderGenericSubtype,
        TemplateHeader_Name: templateHeaderName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessGenericTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessGenericTemplateHeaders`.
   */
  update(
    entity: ProcessGenericTemplateHeaders<T>
  ): UpdateRequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<ProcessGenericTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessGenericTemplateHeaders`.
   * @param templateHeaderProcessType Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderProcessType}.
   * @param templateHeaderGenericSubtype Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderGenericSubtype}.
   * @param templateHeaderName Key property. See {@link ProcessGenericTemplateHeaders.templateHeaderName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGenericTemplateHeaders`.
   */
  delete(
    templateHeaderProcessType: BusinessProcessType,
    templateHeaderGenericSubtype: BusinessProcessGenericSubtype,
    templateHeaderName: string
  ): DeleteRequestBuilder<ProcessGenericTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessGenericTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGenericTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessGenericTemplateHeaders<T>
  ): DeleteRequestBuilder<ProcessGenericTemplateHeaders<T>, T>;
  delete(
    templateHeaderProcessTypeOrEntity: any,
    templateHeaderGenericSubtype?: BusinessProcessGenericSubtype,
    templateHeaderName?: string
  ): DeleteRequestBuilder<ProcessGenericTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<ProcessGenericTemplateHeaders<T>, T>(
      this.entityApi,
      templateHeaderProcessTypeOrEntity instanceof ProcessGenericTemplateHeaders
        ? templateHeaderProcessTypeOrEntity
        : {
            TemplateHeader_ProcessType: templateHeaderProcessTypeOrEntity!,
            TemplateHeader_GenericSubtype: templateHeaderGenericSubtype!,
            TemplateHeader_Name: templateHeaderName!
          }
    );
  }
}
