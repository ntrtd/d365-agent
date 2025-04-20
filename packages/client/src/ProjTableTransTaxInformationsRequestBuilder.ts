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
import { ProjTableTransTaxInformations } from './ProjTableTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link ProjTableTransTaxInformations} entity.
 */
export class ProjTableTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjTableTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `ProjTableTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `ProjTableTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<ProjTableTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<ProjTableTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjTableTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjTableTransTaxInformations`.
   */
  create(
    entity: ProjTableTransTaxInformations<T>
  ): CreateRequestBuilder<ProjTableTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<ProjTableTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjTableTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjTableTransTaxInformations.dataAreaId}.
   * @param projId Key property. See {@link ProjTableTransTaxInformations.projId}.
   * @returns A request builder for creating requests to retrieve one `ProjTableTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjTableTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<ProjTableTransTaxInformations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjId: projId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjTableTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjTableTransTaxInformations`.
   */
  update(
    entity: ProjTableTransTaxInformations<T>
  ): UpdateRequestBuilder<ProjTableTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<ProjTableTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjTableTransTaxInformations`.
   * @param dataAreaId Key property. See {@link ProjTableTransTaxInformations.dataAreaId}.
   * @param projId Key property. See {@link ProjTableTransTaxInformations.projId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjTableTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    projId: string
  ): DeleteRequestBuilder<ProjTableTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjTableTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjTableTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: ProjTableTransTaxInformations<T>
  ): DeleteRequestBuilder<ProjTableTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projId?: string
  ): DeleteRequestBuilder<ProjTableTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<ProjTableTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjTableTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjId: projId!
          }
    );
  }
}
