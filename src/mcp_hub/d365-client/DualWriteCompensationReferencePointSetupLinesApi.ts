/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DualWriteCompensationReferencePointSetupLines } from './DualWriteCompensationReferencePointSetupLines';
import { DualWriteCompensationReferencePointSetupLinesRequestBuilder } from './DualWriteCompensationReferencePointSetupLinesRequestBuilder';
import { CompensationReferencePointsApi } from './CompensationReferencePointsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class DualWriteCompensationReferencePointSetupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
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
  ): DualWriteCompensationReferencePointSetupLinesApi<DeSerializersT> {
    return new DualWriteCompensationReferencePointSetupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link referencePointSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REFERENCE_POINT_SETUP: OneToOneLink<
      DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompensationReferencePointsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REFERENCE_POINT_SETUP: new OneToOneLink(
        'ReferencePointSetup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DualWriteCompensationReferencePointSetupLines;

  requestBuilder(): DualWriteCompensationReferencePointSetupLinesRequestBuilder<DeSerializersT> {
    return new DualWriteCompensationReferencePointSetupLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
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
    typeof DualWriteCompensationReferencePointSetupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DualWriteCompensationReferencePointSetupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_POINT_SETUP_ID: OrderableEdmTypeField<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_POINT_ID: OrderableEdmTypeField<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link referencePointSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REFERENCE_POINT_SETUP: OneToOneLink<
      DualWriteCompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      DualWriteCompensationReferencePointSetupLines<DeSerializers>
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
         * Static representation of the {@link refPointSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'RefPointSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_ID: fieldBuilder.buildEdmTypeField(
          'RefPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          DualWriteCompensationReferencePointSetupLines
        )
      };
    }

    return this._schema;
  }
}
