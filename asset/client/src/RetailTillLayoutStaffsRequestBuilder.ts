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
import { RetailTillLayoutStaffs } from './RetailTillLayoutStaffs';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutStaffs} entity.
 */
export class RetailTillLayoutStaffsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutStaffs<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutStaffs` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutStaffs` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutStaffs<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutStaffs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutStaffs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutStaffs`.
   */
  create(
    entity: RetailTillLayoutStaffs<T>
  ): CreateRequestBuilder<RetailTillLayoutStaffs<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutStaffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutStaffs` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutStaffs.layoutId}.
   * @param staffId Key property. See {@link RetailTillLayoutStaffs.staffId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutStaffs` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    staffId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutStaffs<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutStaffs<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        StaffId: staffId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutStaffs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutStaffs`.
   */
  update(
    entity: RetailTillLayoutStaffs<T>
  ): UpdateRequestBuilder<RetailTillLayoutStaffs<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutStaffs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutStaffs`.
   * @param layoutId Key property. See {@link RetailTillLayoutStaffs.layoutId}.
   * @param staffId Key property. See {@link RetailTillLayoutStaffs.staffId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutStaffs`.
   */
  delete(
    layoutId: string,
    staffId: string
  ): DeleteRequestBuilder<RetailTillLayoutStaffs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutStaffs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutStaffs` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutStaffs<T>
  ): DeleteRequestBuilder<RetailTillLayoutStaffs<T>, T>;
  delete(
    layoutIdOrEntity: any,
    staffId?: string
  ): DeleteRequestBuilder<RetailTillLayoutStaffs<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutStaffs<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutStaffs
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            StaffId: staffId!
          }
    );
  }
}
