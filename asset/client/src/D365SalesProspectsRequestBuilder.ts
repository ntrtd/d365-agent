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
import { D365SalesProspects } from './D365SalesProspects';

/**
 * Request builder class for operations supported on the {@link D365SalesProspects} entity.
 */
export class D365SalesProspectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<D365SalesProspects<T>, T> {
  /**
   * Returns a request builder for querying all `D365SalesProspects` entities.
   * @returns A request builder for creating requests to retrieve all `D365SalesProspects` entities.
   */
  getAll(): GetAllRequestBuilder<D365SalesProspects<T>, T> {
    return new GetAllRequestBuilder<D365SalesProspects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `D365SalesProspects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `D365SalesProspects`.
   */
  create(
    entity: D365SalesProspects<T>
  ): CreateRequestBuilder<D365SalesProspects<T>, T> {
    return new CreateRequestBuilder<D365SalesProspects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `D365SalesProspects` entity based on its keys.
   * @param dataAreaId Key property. See {@link D365SalesProspects.dataAreaId}.
   * @param prospectId Key property. See {@link D365SalesProspects.prospectId}.
   * @returns A request builder for creating requests to retrieve one `D365SalesProspects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    prospectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<D365SalesProspects<T>, T> {
    return new GetByKeyRequestBuilder<D365SalesProspects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProspectId: prospectId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `D365SalesProspects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `D365SalesProspects`.
   */
  update(
    entity: D365SalesProspects<T>
  ): UpdateRequestBuilder<D365SalesProspects<T>, T> {
    return new UpdateRequestBuilder<D365SalesProspects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `D365SalesProspects`.
   * @param dataAreaId Key property. See {@link D365SalesProspects.dataAreaId}.
   * @param prospectId Key property. See {@link D365SalesProspects.prospectId}.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesProspects`.
   */
  delete(
    dataAreaId: string,
    prospectId: string
  ): DeleteRequestBuilder<D365SalesProspects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `D365SalesProspects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `D365SalesProspects` by taking the entity as a parameter.
   */
  delete(
    entity: D365SalesProspects<T>
  ): DeleteRequestBuilder<D365SalesProspects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    prospectId?: string
  ): DeleteRequestBuilder<D365SalesProspects<T>, T> {
    return new DeleteRequestBuilder<D365SalesProspects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof D365SalesProspects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProspectId: prospectId!
          }
    );
  }
}
