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
import { VendorCollaborationUserRequests } from './VendorCollaborationUserRequests';

/**
 * Request builder class for operations supported on the {@link VendorCollaborationUserRequests} entity.
 */
export class VendorCollaborationUserRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorCollaborationUserRequests<T>, T> {
  /**
   * Returns a request builder for querying all `VendorCollaborationUserRequests` entities.
   * @returns A request builder for creating requests to retrieve all `VendorCollaborationUserRequests` entities.
   */
  getAll(): GetAllRequestBuilder<VendorCollaborationUserRequests<T>, T> {
    return new GetAllRequestBuilder<VendorCollaborationUserRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorCollaborationUserRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorCollaborationUserRequests`.
   */
  create(
    entity: VendorCollaborationUserRequests<T>
  ): CreateRequestBuilder<VendorCollaborationUserRequests<T>, T> {
    return new CreateRequestBuilder<VendorCollaborationUserRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorCollaborationUserRequests` entity based on its keys.
   * @param requestId Key property. See {@link VendorCollaborationUserRequests.requestId}.
   * @returns A request builder for creating requests to retrieve one `VendorCollaborationUserRequests` entity based on its keys.
   */
  getByKey(
    requestId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorCollaborationUserRequests<T>, T> {
    return new GetByKeyRequestBuilder<VendorCollaborationUserRequests<T>, T>(
      this.entityApi,
      { RequestId: requestId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorCollaborationUserRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorCollaborationUserRequests`.
   */
  update(
    entity: VendorCollaborationUserRequests<T>
  ): UpdateRequestBuilder<VendorCollaborationUserRequests<T>, T> {
    return new UpdateRequestBuilder<VendorCollaborationUserRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorCollaborationUserRequests`.
   * @param requestId Key property. See {@link VendorCollaborationUserRequests.requestId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorCollaborationUserRequests`.
   */
  delete(
    requestId: string
  ): DeleteRequestBuilder<VendorCollaborationUserRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorCollaborationUserRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorCollaborationUserRequests` by taking the entity as a parameter.
   */
  delete(
    entity: VendorCollaborationUserRequests<T>
  ): DeleteRequestBuilder<VendorCollaborationUserRequests<T>, T>;
  delete(
    requestIdOrEntity: any
  ): DeleteRequestBuilder<VendorCollaborationUserRequests<T>, T> {
    return new DeleteRequestBuilder<VendorCollaborationUserRequests<T>, T>(
      this.entityApi,
      requestIdOrEntity instanceof VendorCollaborationUserRequests
        ? requestIdOrEntity
        : { RequestId: requestIdOrEntity! }
    );
  }
}
