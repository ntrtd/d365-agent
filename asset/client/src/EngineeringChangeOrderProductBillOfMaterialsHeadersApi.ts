/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductBillOfMaterialsHeaders } from './EngineeringChangeOrderProductBillOfMaterialsHeaders';
import { EngineeringChangeOrderProductBillOfMaterialsHeadersRequestBuilder } from './EngineeringChangeOrderProductBillOfMaterialsHeadersRequestBuilder';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { WorkersApi } from './WorkersApi';
import { EngineeringChangeOrderProductBillOfMaterialsLinesApi } from './EngineeringChangeOrderProductBillOfMaterialsLinesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringChangeOrderProductBillOfMaterialsHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): EngineeringChangeOrderProductBillOfMaterialsHeadersApi<DeSerializersT> {
    return new EngineeringChangeOrderProductBillOfMaterialsHeadersApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductBillOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_LINES: OneToManyLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductBillOfMaterialsLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      EngineeringChangeOrderProductBillOfMaterialsLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[0]
      ),
      APPROVER_WORKER: new OneToOneLink('ApproverWorker', this, linkedApis[1]),
      ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_LINES:
        new OneToManyLink(
          'EngineeringChangeOrderProductBillOfMaterialsLines',
          this,
          linkedApis[2]
        )
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductBillOfMaterialsHeaders;

  requestBuilder(): EngineeringChangeOrderProductBillOfMaterialsHeadersRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductBillOfMaterialsHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EngineeringChangeOrderProductBillOfMaterialsHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductBillOfMaterialsHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOM_NAME: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: OrderableEdmTypeField<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approverWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductBillOfMaterialsLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_BILL_OF_MATERIALS_LINES: OneToManyLink<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductBillOfMaterialsLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductBillOfMaterialsHeaders<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', false),
        /**
         * Static representation of the {@link bomName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_NAME: fieldBuilder.buildEdmTypeField('BOMName', 'Edm.String', true),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEdmTypeField(
          'IsApproved',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductBillOfMaterialsHeaders
        )
      };
    }

    return this._schema;
  }
}
