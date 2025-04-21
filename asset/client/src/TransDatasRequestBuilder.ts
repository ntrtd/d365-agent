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
import { TransDatas } from './TransDatas';
import { OffTableAllRu } from './OffTableAllRu';
import { ModuleCustVend } from './ModuleCustVend';
import { OffInvRelationTypeAllTable_Ru } from './OffInvRelationTypeAllTable_Ru';
import { OffPositionRu } from './OffPositionRu';
import { OffReportTypeRu } from './OffReportTypeRu';

/**
 * Request builder class for operations supported on the {@link TransDatas} entity.
 */
export class TransDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransDatas<T>, T> {
  /**
   * Returns a request builder for querying all `TransDatas` entities.
   * @returns A request builder for creating requests to retrieve all `TransDatas` entities.
   */
  getAll(): GetAllRequestBuilder<TransDatas<T>, T> {
    return new GetAllRequestBuilder<TransDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransDatas`.
   */
  create(entity: TransDatas<T>): CreateRequestBuilder<TransDatas<T>, T> {
    return new CreateRequestBuilder<TransDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TransDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransDatas.dataAreaId}.
   * @param accountCode Key property. See {@link TransDatas.accountCode}.
   * @param module Key property. See {@link TransDatas.module}.
   * @param accountRelation Key property. See {@link TransDatas.accountRelation}.
   * @param warehouse Key property. See {@link TransDatas.warehouse}.
   * @param associationWithWarehouse Key property. See {@link TransDatas.associationWithWarehouse}.
   * @param employeeName Key property. See {@link TransDatas.employeeName}.
   * @param officialSession Key property. See {@link TransDatas.officialSession}.
   * @param position Key property. See {@link TransDatas.position}.
   * @param reportType Key property. See {@link TransDatas.reportType}.
   * @param title Key property. See {@link TransDatas.title}.
   * @returns A request builder for creating requests to retrieve one `TransDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffTableAll_RU'
    >,
    module: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ModuleCustVend'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    warehouse: DeserializedType<T, 'Edm.String'>,
    associationWithWarehouse: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffInvRelationType_AllTable_RU'
    >,
    employeeName: DeserializedType<T, 'Edm.String'>,
    officialSession: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffPosition_RU'
    >,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.OffReportType_RU'
    >,
    title: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransDatas<T>, T> {
    return new GetByKeyRequestBuilder<TransDatas<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      Module: module,
      AccountRelation: accountRelation,
      Warehouse: warehouse,
      AssociationWithWarehouse: associationWithWarehouse,
      EmployeeName: employeeName,
      OfficialSession: officialSession,
      Position: position,
      ReportType: reportType,
      Title: title
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TransDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransDatas`.
   */
  update(entity: TransDatas<T>): UpdateRequestBuilder<TransDatas<T>, T> {
    return new UpdateRequestBuilder<TransDatas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TransDatas`.
   * @param dataAreaId Key property. See {@link TransDatas.dataAreaId}.
   * @param accountCode Key property. See {@link TransDatas.accountCode}.
   * @param module Key property. See {@link TransDatas.module}.
   * @param accountRelation Key property. See {@link TransDatas.accountRelation}.
   * @param warehouse Key property. See {@link TransDatas.warehouse}.
   * @param associationWithWarehouse Key property. See {@link TransDatas.associationWithWarehouse}.
   * @param employeeName Key property. See {@link TransDatas.employeeName}.
   * @param officialSession Key property. See {@link TransDatas.officialSession}.
   * @param position Key property. See {@link TransDatas.position}.
   * @param reportType Key property. See {@link TransDatas.reportType}.
   * @param title Key property. See {@link TransDatas.title}.
   * @returns A request builder for creating requests that delete an entity of type `TransDatas`.
   */
  delete(
    dataAreaId: string,
    accountCode: OffTableAllRu,
    module: ModuleCustVend,
    accountRelation: string,
    warehouse: string,
    associationWithWarehouse: OffInvRelationTypeAllTable_Ru,
    employeeName: string,
    officialSession: string,
    position: OffPositionRu,
    reportType: OffReportTypeRu,
    title: string
  ): DeleteRequestBuilder<TransDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransDatas` by taking the entity as a parameter.
   */
  delete(entity: TransDatas<T>): DeleteRequestBuilder<TransDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: OffTableAllRu,
    module?: ModuleCustVend,
    accountRelation?: string,
    warehouse?: string,
    associationWithWarehouse?: OffInvRelationTypeAllTable_Ru,
    employeeName?: string,
    officialSession?: string,
    position?: OffPositionRu,
    reportType?: OffReportTypeRu,
    title?: string
  ): DeleteRequestBuilder<TransDatas<T>, T> {
    return new DeleteRequestBuilder<TransDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            Module: module!,
            AccountRelation: accountRelation!,
            Warehouse: warehouse!,
            AssociationWithWarehouse: associationWithWarehouse!,
            EmployeeName: employeeName!,
            OfficialSession: officialSession!,
            Position: position!,
            ReportType: reportType!,
            Title: title!
          }
    );
  }
}
