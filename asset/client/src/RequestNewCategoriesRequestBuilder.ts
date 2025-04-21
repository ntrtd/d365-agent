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
import { RequestNewCategories } from './RequestNewCategories';

/**
 * Request builder class for operations supported on the {@link RequestNewCategories} entity.
 */
export class RequestNewCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RequestNewCategories<T>, T> {
  /**
   * Returns a request builder for querying all `RequestNewCategories` entities.
   * @returns A request builder for creating requests to retrieve all `RequestNewCategories` entities.
   */
  getAll(): GetAllRequestBuilder<RequestNewCategories<T>, T> {
    return new GetAllRequestBuilder<RequestNewCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RequestNewCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RequestNewCategories`.
   */
  create(
    entity: RequestNewCategories<T>
  ): CreateRequestBuilder<RequestNewCategories<T>, T> {
    return new CreateRequestBuilder<RequestNewCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RequestNewCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link RequestNewCategories.dataAreaId}.
   * @param vendRequestRequestId Key property. See {@link RequestNewCategories.vendRequestRequestId}.
   * @param ecoResCategoryName Key property. See {@link RequestNewCategories.ecoResCategoryName}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RequestNewCategories.ecoResCategoryHierarchyName}.
   * @param omOperatingUnitPartyNumber Key property. See {@link RequestNewCategories.omOperatingUnitPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `RequestNewCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendRequestRequestId: DeserializedType<T, 'Edm.String'>,
    ecoResCategoryName: DeserializedType<T, 'Edm.String'>,
    ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RequestNewCategories<T>, T> {
    return new GetByKeyRequestBuilder<RequestNewCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendRequest_RequestId: vendRequestRequestId,
        EcoResCategory_Name: ecoResCategoryName,
        EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName,
        OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RequestNewCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RequestNewCategories`.
   */
  update(
    entity: RequestNewCategories<T>
  ): UpdateRequestBuilder<RequestNewCategories<T>, T> {
    return new UpdateRequestBuilder<RequestNewCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RequestNewCategories`.
   * @param dataAreaId Key property. See {@link RequestNewCategories.dataAreaId}.
   * @param vendRequestRequestId Key property. See {@link RequestNewCategories.vendRequestRequestId}.
   * @param ecoResCategoryName Key property. See {@link RequestNewCategories.ecoResCategoryName}.
   * @param ecoResCategoryHierarchyName Key property. See {@link RequestNewCategories.ecoResCategoryHierarchyName}.
   * @param omOperatingUnitPartyNumber Key property. See {@link RequestNewCategories.omOperatingUnitPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RequestNewCategories`.
   */
  delete(
    dataAreaId: string,
    vendRequestRequestId: string,
    ecoResCategoryName: string,
    ecoResCategoryHierarchyName: string,
    omOperatingUnitPartyNumber: string
  ): DeleteRequestBuilder<RequestNewCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RequestNewCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RequestNewCategories` by taking the entity as a parameter.
   */
  delete(
    entity: RequestNewCategories<T>
  ): DeleteRequestBuilder<RequestNewCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendRequestRequestId?: string,
    ecoResCategoryName?: string,
    ecoResCategoryHierarchyName?: string,
    omOperatingUnitPartyNumber?: string
  ): DeleteRequestBuilder<RequestNewCategories<T>, T> {
    return new DeleteRequestBuilder<RequestNewCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RequestNewCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendRequest_RequestId: vendRequestRequestId!,
            EcoResCategory_Name: ecoResCategoryName!,
            EcoResCategoryHierarchy_Name: ecoResCategoryHierarchyName!,
            OMOperatingUnit_PartyNumber: omOperatingUnitPartyNumber!
          }
    );
  }
}
