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
import { ProjExpensesExport } from './ProjExpensesExport';

/**
 * Request builder class for operations supported on the {@link ProjExpensesExport} entity.
 */
export class ProjExpensesExportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjExpensesExport<T>, T> {
  /**
   * Returns a request builder for querying all `ProjExpensesExport` entities.
   * @returns A request builder for creating requests to retrieve all `ProjExpensesExport` entities.
   */
  getAll(): GetAllRequestBuilder<ProjExpensesExport<T>, T> {
    return new GetAllRequestBuilder<ProjExpensesExport<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjExpensesExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjExpensesExport`.
   */
  create(
    entity: ProjExpensesExport<T>
  ): CreateRequestBuilder<ProjExpensesExport<T>, T> {
    return new CreateRequestBuilder<ProjExpensesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjExpensesExport` entity based on its keys.
   * @param expTransNumber Key property. See {@link ProjExpensesExport.expTransNumber}.
   * @param referenceDataAreaId Key property. See {@link ProjExpensesExport.referenceDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `ProjExpensesExport` entity based on its keys.
   */
  getByKey(
    expTransNumber: DeserializedType<T, 'Edm.String'>,
    referenceDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjExpensesExport<T>, T> {
    return new GetByKeyRequestBuilder<ProjExpensesExport<T>, T>(
      this.entityApi,
      {
        ExpTransNumber: expTransNumber,
        ReferenceDataAreaId: referenceDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjExpensesExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjExpensesExport`.
   */
  update(
    entity: ProjExpensesExport<T>
  ): UpdateRequestBuilder<ProjExpensesExport<T>, T> {
    return new UpdateRequestBuilder<ProjExpensesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjExpensesExport`.
   * @param expTransNumber Key property. See {@link ProjExpensesExport.expTransNumber}.
   * @param referenceDataAreaId Key property. See {@link ProjExpensesExport.referenceDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjExpensesExport`.
   */
  delete(
    expTransNumber: string,
    referenceDataAreaId: string
  ): DeleteRequestBuilder<ProjExpensesExport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjExpensesExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjExpensesExport` by taking the entity as a parameter.
   */
  delete(
    entity: ProjExpensesExport<T>
  ): DeleteRequestBuilder<ProjExpensesExport<T>, T>;
  delete(
    expTransNumberOrEntity: any,
    referenceDataAreaId?: string
  ): DeleteRequestBuilder<ProjExpensesExport<T>, T> {
    return new DeleteRequestBuilder<ProjExpensesExport<T>, T>(
      this.entityApi,
      expTransNumberOrEntity instanceof ProjExpensesExport
        ? expTransNumberOrEntity
        : {
            ExpTransNumber: expTransNumberOrEntity!,
            ReferenceDataAreaId: referenceDataAreaId!
          }
    );
  }
}
