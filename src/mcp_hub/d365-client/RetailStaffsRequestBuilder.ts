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
import { RetailStaffs } from './RetailStaffs';

/**
 * Request builder class for operations supported on the {@link RetailStaffs} entity.
 */
export class RetailStaffsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStaffs<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStaffs` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStaffs` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStaffs<T>, T> {
    return new GetAllRequestBuilder<RetailStaffs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailStaffs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStaffs`.
   */
  create(entity: RetailStaffs<T>): CreateRequestBuilder<RetailStaffs<T>, T> {
    return new CreateRequestBuilder<RetailStaffs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailStaffs` entity based on its keys.
   * @param personnelNumber Key property. See {@link RetailStaffs.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStaffs` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStaffs<T>, T> {
    return new GetByKeyRequestBuilder<RetailStaffs<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStaffs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStaffs`.
   */
  update(entity: RetailStaffs<T>): UpdateRequestBuilder<RetailStaffs<T>, T> {
    return new UpdateRequestBuilder<RetailStaffs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStaffs`.
   * @param personnelNumber Key property. See {@link RetailStaffs.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStaffs`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<RetailStaffs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStaffs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStaffs` by taking the entity as a parameter.
   */
  delete(entity: RetailStaffs<T>): DeleteRequestBuilder<RetailStaffs<T>, T>;
  delete(
    personnelNumberOrEntity: any
  ): DeleteRequestBuilder<RetailStaffs<T>, T> {
    return new DeleteRequestBuilder<RetailStaffs<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof RetailStaffs
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
