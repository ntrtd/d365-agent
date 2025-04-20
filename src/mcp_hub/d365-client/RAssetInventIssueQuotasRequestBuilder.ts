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
import { RAssetInventIssueQuotas } from './RAssetInventIssueQuotas';
import { RAssetTableAll } from './RAssetTableAll';

/**
 * Request builder class for operations supported on the {@link RAssetInventIssueQuotas} entity.
 */
export class RAssetInventIssueQuotasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetInventIssueQuotas<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetInventIssueQuotas` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetInventIssueQuotas` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetInventIssueQuotas<T>, T> {
    return new GetAllRequestBuilder<RAssetInventIssueQuotas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RAssetInventIssueQuotas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetInventIssueQuotas`.
   */
  create(
    entity: RAssetInventIssueQuotas<T>
  ): CreateRequestBuilder<RAssetInventIssueQuotas<T>, T> {
    return new CreateRequestBuilder<RAssetInventIssueQuotas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetInventIssueQuotas` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetInventIssueQuotas.dataAreaId}.
   * @param typeOfRate Key property. See {@link RAssetInventIssueQuotas.typeOfRate}.
   * @param itemGroup Key property. See {@link RAssetInventIssueQuotas.itemGroup}.
   * @param item Key property. See {@link RAssetInventIssueQuotas.item}.
   * @param titleRelationType Key property. See {@link RAssetInventIssueQuotas.titleRelationType}.
   * @param title Key property. See {@link RAssetInventIssueQuotas.title}.
   * @param typeOfWorksRelationType Key property. See {@link RAssetInventIssueQuotas.typeOfWorksRelationType}.
   * @param typeOfWorks Key property. See {@link RAssetInventIssueQuotas.typeOfWorks}.
   * @param departmentRelationType Key property. See {@link RAssetInventIssueQuotas.departmentRelationType}.
   * @param department Key property. See {@link RAssetInventIssueQuotas.department}.
   * @returns A request builder for creating requests to retrieve one `RAssetInventIssueQuotas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeOfRate: DeserializedType<T, 'Edm.String'>,
    itemGroup: DeserializedType<T, 'Edm.String'>,
    item: DeserializedType<T, 'Edm.String'>,
    titleRelationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetTableAll'
    >,
    title: DeserializedType<T, 'Edm.String'>,
    typeOfWorksRelationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetTableAll'
    >,
    typeOfWorks: DeserializedType<T, 'Edm.String'>,
    departmentRelationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetTableAll'
    >,
    department: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetInventIssueQuotas<T>, T> {
    return new GetByKeyRequestBuilder<RAssetInventIssueQuotas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeOfRate: typeOfRate,
        ItemGroup: itemGroup,
        Item: item,
        TitleRelationType: titleRelationType,
        Title: title,
        TypeOfWorksRelationType: typeOfWorksRelationType,
        TypeOfWorks: typeOfWorks,
        DepartmentRelationType: departmentRelationType,
        Department: department
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetInventIssueQuotas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetInventIssueQuotas`.
   */
  update(
    entity: RAssetInventIssueQuotas<T>
  ): UpdateRequestBuilder<RAssetInventIssueQuotas<T>, T> {
    return new UpdateRequestBuilder<RAssetInventIssueQuotas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetInventIssueQuotas`.
   * @param dataAreaId Key property. See {@link RAssetInventIssueQuotas.dataAreaId}.
   * @param typeOfRate Key property. See {@link RAssetInventIssueQuotas.typeOfRate}.
   * @param itemGroup Key property. See {@link RAssetInventIssueQuotas.itemGroup}.
   * @param item Key property. See {@link RAssetInventIssueQuotas.item}.
   * @param titleRelationType Key property. See {@link RAssetInventIssueQuotas.titleRelationType}.
   * @param title Key property. See {@link RAssetInventIssueQuotas.title}.
   * @param typeOfWorksRelationType Key property. See {@link RAssetInventIssueQuotas.typeOfWorksRelationType}.
   * @param typeOfWorks Key property. See {@link RAssetInventIssueQuotas.typeOfWorks}.
   * @param departmentRelationType Key property. See {@link RAssetInventIssueQuotas.departmentRelationType}.
   * @param department Key property. See {@link RAssetInventIssueQuotas.department}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetInventIssueQuotas`.
   */
  delete(
    dataAreaId: string,
    typeOfRate: string,
    itemGroup: string,
    item: string,
    titleRelationType: RAssetTableAll,
    title: string,
    typeOfWorksRelationType: RAssetTableAll,
    typeOfWorks: string,
    departmentRelationType: RAssetTableAll,
    department: string
  ): DeleteRequestBuilder<RAssetInventIssueQuotas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetInventIssueQuotas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetInventIssueQuotas` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetInventIssueQuotas<T>
  ): DeleteRequestBuilder<RAssetInventIssueQuotas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeOfRate?: string,
    itemGroup?: string,
    item?: string,
    titleRelationType?: RAssetTableAll,
    title?: string,
    typeOfWorksRelationType?: RAssetTableAll,
    typeOfWorks?: string,
    departmentRelationType?: RAssetTableAll,
    department?: string
  ): DeleteRequestBuilder<RAssetInventIssueQuotas<T>, T> {
    return new DeleteRequestBuilder<RAssetInventIssueQuotas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetInventIssueQuotas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeOfRate: typeOfRate!,
            ItemGroup: itemGroup!,
            Item: item!,
            TitleRelationType: titleRelationType!,
            Title: title!,
            TypeOfWorksRelationType: typeOfWorksRelationType!,
            TypeOfWorks: typeOfWorks!,
            DepartmentRelationType: departmentRelationType!,
            Department: department!
          }
    );
  }
}
