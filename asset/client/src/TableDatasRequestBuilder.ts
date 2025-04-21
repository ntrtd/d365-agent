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
import { TableDatas } from './TableDatas';
import { OffTableAllRu } from './OffTableAllRu';
import { OffInvRelationTypeAllTable_Ru } from './OffInvRelationTypeAllTable_Ru';
import { OffPositionRu } from './OffPositionRu';
import { OffReportTypeRu } from './OffReportTypeRu';

/**
 * Request builder class for operations supported on the {@link TableDatas} entity.
 */
export class TableDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TableDatas<T>, T> {
  /**
   * Returns a request builder for querying all `TableDatas` entities.
   * @returns A request builder for creating requests to retrieve all `TableDatas` entities.
   */
  getAll(): GetAllRequestBuilder<TableDatas<T>, T> {
    return new GetAllRequestBuilder<TableDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TableDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TableDatas`.
   */
  create(entity: TableDatas<T>): CreateRequestBuilder<TableDatas<T>, T> {
    return new CreateRequestBuilder<TableDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TableDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link TableDatas.dataAreaId}.
   * @param accountCode Key property. See {@link TableDatas.accountCode}.
   * @param accountRelation Key property. See {@link TableDatas.accountRelation}.
   * @param warehouse Key property. See {@link TableDatas.warehouse}.
   * @param associationWithWarehouse Key property. See {@link TableDatas.associationWithWarehouse}.
   * @param name Key property. See {@link TableDatas.name}.
   * @param position Key property. See {@link TableDatas.position}.
   * @param reportType Key property. See {@link TableDatas.reportType}.
   * @param jobTitle Key property. See {@link TableDatas.jobTitle}.
   * @returns A request builder for creating requests to retrieve one `TableDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffTableAll_RU'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    warehouse: DeserializedType<T, 'Edm.String'>,
    associationWithWarehouse: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffInvRelationType_AllTable_RU'
    >,
    name: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffPosition_RU'
    >,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffReportType_RU'
    >,
    jobTitle: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TableDatas<T>, T> {
    return new GetByKeyRequestBuilder<TableDatas<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      AccountRelation: accountRelation,
      Warehouse: warehouse,
      AssociationWithWarehouse: associationWithWarehouse,
      Name: name,
      Position: position,
      ReportType: reportType,
      JobTitle: jobTitle
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TableDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TableDatas`.
   */
  update(entity: TableDatas<T>): UpdateRequestBuilder<TableDatas<T>, T> {
    return new UpdateRequestBuilder<TableDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TableDatas`.
   * @param dataAreaId Key property. See {@link TableDatas.dataAreaId}.
   * @param accountCode Key property. See {@link TableDatas.accountCode}.
   * @param accountRelation Key property. See {@link TableDatas.accountRelation}.
   * @param warehouse Key property. See {@link TableDatas.warehouse}.
   * @param associationWithWarehouse Key property. See {@link TableDatas.associationWithWarehouse}.
   * @param name Key property. See {@link TableDatas.name}.
   * @param position Key property. See {@link TableDatas.position}.
   * @param reportType Key property. See {@link TableDatas.reportType}.
   * @param jobTitle Key property. See {@link TableDatas.jobTitle}.
   * @returns A request builder for creating requests that delete an entity of type `TableDatas`.
   */
  delete(
    dataAreaId: string,
    accountCode: OffTableAllRu,
    accountRelation: string,
    warehouse: string,
    associationWithWarehouse: OffInvRelationTypeAllTable_Ru,
    name: string,
    position: OffPositionRu,
    reportType: OffReportTypeRu,
    jobTitle: string
  ): DeleteRequestBuilder<TableDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TableDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TableDatas` by taking the entity as a parameter.
   */
  delete(entity: TableDatas<T>): DeleteRequestBuilder<TableDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: OffTableAllRu,
    accountRelation?: string,
    warehouse?: string,
    associationWithWarehouse?: OffInvRelationTypeAllTable_Ru,
    name?: string,
    position?: OffPositionRu,
    reportType?: OffReportTypeRu,
    jobTitle?: string
  ): DeleteRequestBuilder<TableDatas<T>, T> {
    return new DeleteRequestBuilder<TableDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TableDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            AccountRelation: accountRelation!,
            Warehouse: warehouse!,
            AssociationWithWarehouse: associationWithWarehouse!,
            Name: name!,
            Position: position!,
            ReportType: reportType!,
            JobTitle: jobTitle!
          }
    );
  }
}
