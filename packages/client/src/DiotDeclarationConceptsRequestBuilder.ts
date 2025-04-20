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
import { DiotDeclarationConcepts } from './DiotDeclarationConcepts';

/**
 * Request builder class for operations supported on the {@link DiotDeclarationConcepts} entity.
 */
export class DiotDeclarationConceptsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiotDeclarationConcepts<T>, T> {
  /**
   * Returns a request builder for querying all `DiotDeclarationConcepts` entities.
   * @returns A request builder for creating requests to retrieve all `DiotDeclarationConcepts` entities.
   */
  getAll(): GetAllRequestBuilder<DiotDeclarationConcepts<T>, T> {
    return new GetAllRequestBuilder<DiotDeclarationConcepts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiotDeclarationConcepts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiotDeclarationConcepts`.
   */
  create(
    entity: DiotDeclarationConcepts<T>
  ): CreateRequestBuilder<DiotDeclarationConcepts<T>, T> {
    return new CreateRequestBuilder<DiotDeclarationConcepts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiotDeclarationConcepts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiotDeclarationConcepts.dataAreaId}.
   * @param conceptId Key property. See {@link DiotDeclarationConcepts.conceptId}.
   * @param taxCode Key property. See {@link DiotDeclarationConcepts.taxCode}.
   * @returns A request builder for creating requests to retrieve one `DiotDeclarationConcepts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    conceptId: DeserializedType<T, 'Edm.Int32'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiotDeclarationConcepts<T>, T> {
    return new GetByKeyRequestBuilder<DiotDeclarationConcepts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ConceptId: conceptId,
        TaxCode: taxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiotDeclarationConcepts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiotDeclarationConcepts`.
   */
  update(
    entity: DiotDeclarationConcepts<T>
  ): UpdateRequestBuilder<DiotDeclarationConcepts<T>, T> {
    return new UpdateRequestBuilder<DiotDeclarationConcepts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiotDeclarationConcepts`.
   * @param dataAreaId Key property. See {@link DiotDeclarationConcepts.dataAreaId}.
   * @param conceptId Key property. See {@link DiotDeclarationConcepts.conceptId}.
   * @param taxCode Key property. See {@link DiotDeclarationConcepts.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `DiotDeclarationConcepts`.
   */
  delete(
    dataAreaId: string,
    conceptId: number,
    taxCode: string
  ): DeleteRequestBuilder<DiotDeclarationConcepts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiotDeclarationConcepts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiotDeclarationConcepts` by taking the entity as a parameter.
   */
  delete(
    entity: DiotDeclarationConcepts<T>
  ): DeleteRequestBuilder<DiotDeclarationConcepts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    conceptId?: number,
    taxCode?: string
  ): DeleteRequestBuilder<DiotDeclarationConcepts<T>, T> {
    return new DeleteRequestBuilder<DiotDeclarationConcepts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiotDeclarationConcepts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConceptId: conceptId!,
            TaxCode: taxCode!
          }
    );
  }
}
